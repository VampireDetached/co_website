import LeaderboardTable from "@/components/LeaderboardTable";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Co-Website Benchmark
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Evaluating the capabilities of Large Language Models in autonomous website generation and software engineering tasks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#leaderboard"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Leaderboard
              </a>
              <a href="/benchmark" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content / Leaderboard */}
      <div id="leaderboard" className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="border-b border-gray-200 pb-5 mb-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Official Leaderboard</h3>
        </div>
        <LeaderboardTable />
      </div>
    </div>
  );
}
