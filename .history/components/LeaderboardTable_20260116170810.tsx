import { promises as fs } from 'fs';
import path from 'path';

type LeaderboardEntry = {
  rank: number;
  model: string;
  overall_alignment: number;
  false_consensus: number;
  anchoring: number;
  framing_effect: number;
};

export default async function LeaderboardTable() {
  const filePath = path.join(process.cwd(), 'data/leaderboard.json');
  let data: LeaderboardEntry[] = [];
  try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(fileContents);
  } catch (e) {
      console.error("Could not read leaderboard data", e);
  }

  const ProgressBar = ({ value }: { value: number }) => (
     <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div className={`h-2.5 rounded-full ${value > 80 ? 'bg-green-500' : value > 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${value}%` }}></div>
     </div>
  );

  return (
    <div id="leaderboard" className="py-24 bg-gray-50 sm:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Leaderboard</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Evaluating model alignment with human cognitive biases.
                </p>
            </div>

            <div className="overflow-x-auto shadow-sm ring-1 ring-black ring-opacity-5 sm:rounded-lg bg-white">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 w-16">
                    Rank
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Model
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 w-48">
                    Overall Alignment
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500 font-normal">
                    False Consensus
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500 font-normal">
                    Anchoring
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500 font-normal">
                    Framing Effect
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((entry) => (
                    <tr key={entry.rank}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                        {entry.model}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                         <div className="flex flex-col">
                             <span className="font-bold text-gray-900">{entry.overall_alignment}%</span>
                             <ProgressBar value={entry.overall_alignment} />
                         </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {entry.false_consensus}%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {entry.anchoring}%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {entry.framing_effect}%
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  );
}
