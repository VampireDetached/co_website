"use client";

import { useState, useMemo } from 'react';

type RawLeaderboardEntry = {
  model: string;
  variant: string;
  study_id: string;
  average_bas: number;
  ecs?: number | string; // Effect Consistency Score
  total_cost: number;
  total_output_tokens: number;
  findings_breakdown?: Record<string, number>;
};

type AggregatedEntry = {
  id: string; // model + variant
  model: string;
  variant: string;
  overall_alignment: number;
  overall_ecs: string; // Display string for ECS
  total_cost: number;
  total_tokens: number;
  study_scores: Record<string, number>;
  study_ecs: Record<string, number | string>;
  raw_data: RawLeaderboardEntry[];
};

export default function LeaderboardList({ rawData }: { rawData: RawLeaderboardEntry[] }) {
  const [selectedVariant, setSelectedVariant] = useState<string>('All');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // 1. Get unique variants for filter
  const variants = useMemo(() => {
    const v = new Set(rawData.map(d => d.variant));
    return ['All', ...Array.from(v)];
  }, [rawData]);

  // 2. Aggregate Data
  const aggregatedData = useMemo(() => {
    const grouped: Record<string, AggregatedEntry> = {};

    rawData.forEach(entry => {
      const key = `${entry.model}-${entry.variant}`;
      if (!grouped[key]) {
        grouped[key] = {
          id: key,
          model: entry.model,
          variant: entry.variant,
          overall_alignment: 0,
          total_cost: 0,
          total_tokens: 0,
          study_scores: {},
          raw_data: []
        };
      }
      
      grouped[key].study_scores[entry.study_id] = entry.average_bas;
      grouped[key].total_cost += entry.total_cost;
      grouped[key].total_tokens += entry.total_output_tokens;
      grouped[key].raw_data.push(entry);
    });

    // Calculate averages and finalize
    return Object.values(grouped).map(group => {
      const studies = Object.values(group.study_scores);
      const avg = studies.reduce((a, b) => a + b, 0) / studies.length;
      return {
        ...group,
        overall_alignment: avg * 100 // Convert to percentage
      };
    }).sort((a, b) => b.overall_alignment - a.overall_alignment); // Sort by score desc

  }, [rawData]);

  // 3. Filter
  const filteredData = useMemo(() => {
    if (selectedVariant === 'All') return aggregatedData;
    return aggregatedData.filter(d => d.variant === selectedVariant);
  }, [aggregatedData, selectedVariant]);

  // Helpers
  const formatScore = (val: number) => val.toFixed(1) + '%';
  const formatCost = (val: number) => '$' + val.toFixed(4);
  const formatInteger = (val: number) => new Intl.NumberFormat().format(val);
  
  const getScoreColor = (score: number) => {
      // Input score is percentage 0-100
      if (score >= 80) return "bg-green-500";
      if (score >= 60) return "bg-yellow-400";
      if (score >= 40) return "bg-orange-400";
      return "bg-red-400";
  };

  const modelShortName = (name: string) => name.split('/')[1] || name;

  const toggleExpand = (id: string) => {
    if (expandedRow === id) setExpandedRow(null);
    else setExpandedRow(id);
  };

  return (
    <div className="bg-white">
      {/* Filters */}
      <div className="flex justify-end mb-4 gap-2">
        <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600 font-medium">Filter by Variant:</span>
            <select 
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="block w-40 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
                {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
        </div>
      </div>

      <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 w-12">Rank</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Model</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Variant</th>
              <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Overall Alignment</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">Study Scores</th>
              <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Cost</th>
              <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Tokens</th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Details</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredData.map((row, index) => (
              <>
              <tr key={row.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleExpand(row.id)}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center font-medium text-gray-900 sm:pl-6">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                  {modelShortName(row.model)}
                </td>
                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-mono text-xs">
                  {row.variant}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10 ${
                        row.overall_alignment > 75 ? 'text-green-700 bg-green-50' : 
                        row.overall_alignment > 50 ? 'text-yellow-700 bg-yellow-50' : 'text-red-700 bg-red-50'
                    }`}>
                        {formatScore(row.overall_alignment)}
                    </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm hidden md:table-cell">
                    <div className="flex gap-1">
                        {/* Only showing first 12 studies to save space if dataset grows */}
                        {Array.from({length: 12}).map((_, i) => {
                            const studyId = `study_${String(i+1).padStart(3, '0')}`;
                            const score = row.study_scores[studyId] ? row.study_scores[studyId] * 100 : 0;
                            const hasData = !!row.study_scores[studyId];
                            
                            return (
                                <div 
                                    key={studyId} 
                                    className={`w-3 h-6 rounded-sm ${hasData ? getScoreColor(score) : 'bg-gray-100'}`}
                                    title={`${studyId}: ${hasData ? score.toFixed(1) + '%' : 'N/A'}`}
                                ></div>
                            )
                        })}
                    </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500 tabular-nums">
                  {formatCost(row.total_cost)}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500 tabular-nums">
                  {formatInteger(row.total_tokens)}
                </td>
                 <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <span className="text-blue-600 hover:text-blue-900">
                    {expandedRow === row.id ? 'Hide' : 'Show'}
                  </span>
                </td>
              </tr>
              {expandedRow === row.id && (
                  <tr className="bg-gray-50">
                      <td colSpan={8} className="p-4 sm:px-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {row.raw_data.sort((a,b) => a.study_id.localeCompare(b.study_id)).map(studyData => (
                                <div key={studyData.study_id} className="bg-white p-3 rounded shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-xs uppercase text-gray-500 mb-2 border-b pb-1 flex justify-between">
                                        {studyData.study_id}
                                        <span className={studyData.average_bas > 0.7 ? "text-green-600" : "text-gray-900"}>
                                            Avg: {(studyData.average_bas * 100).toFixed(1)}%
                                        </span>
                                    </h4>
                                    <div className="space-y-1">
                                        {Object.entries(studyData.findings_breakdown).map(([finding, val]) => (
                                            <div key={finding} className="flex items-center text-xs">
                                                <span className="w-8 text-gray-400">{finding}</span>
                                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full mx-2">
                                                    <div className="h-1.5 bg-blue-500 rounded-full" style={{width: `${val * 100}%`}}></div>
                                                </div>
                                                <span className="w-8 text-right tabular-nums">{(val * 100).toFixed(0)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-gray-50 flex justify-between text-[10px] text-gray-400">
                                        <span>C: {formatCost(studyData.total_cost)}</span>
                                        <span>T: {formatInteger(studyData.total_output_tokens)}</span>
                                    </div>
                                </div>
                            ))}
                          </div>
                      </td>
                  </tr>
              )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
