import { promises as fs } from 'fs';
import path from 'path';

type LeaderboardEntry = {
  model: string;
  benchmark: string;
  pass_rate: number;
  date: string;
  paper?: string;
  price?: string;
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
  
  // Sort by pass_rate descending
  data.sort((a, b) => b.pass_rate - a.pass_rate);

  return (
    <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
              Model
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Resolved
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Benchmark
            </th>
             <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Date
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Links
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((entry, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {entry.model}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {(entry.pass_rate * 100).toFixed(2)}%
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {entry.benchmark}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {entry.date}
              </td>
               <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                 {entry.paper ? <a href={entry.paper} className="text-blue-600 hover:text-blue-900">Paper</a> : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
