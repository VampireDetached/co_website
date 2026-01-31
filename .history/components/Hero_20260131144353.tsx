import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate pt-14 px-6 lg:px-8 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="mb-8 flex justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-blue-600">Latest Validation:</span> Evaluating anthropomorphic alignment in next-gen models. New data for Anthropic Claude Haiku 4.5 included. <a href="#leaderboard" className="font-semibold text-blue-600"><span className="absolute inset-0" aria-hidden="true"></span>View Results <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif">
            HS-Bench: <span className="text-blue-600">Replicating</span> Human Psych Studies with LLMs
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sans">
            A semi-automated pipeline for converting psychological research papers into replicable benchmarks, evaluating whether AI models exhibit human-like cognitive biases.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#leaderboard"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Leaderboard
            </Link>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              Read the Paper <span aria-hidden="true" className="ml-1">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="bg-gray-900 rounded-lg shadow-2xl p-4 overflow-hidden text-sm text-gray-300 font-mono border border-gray-800 ring-1 ring-white/10 dark:ring-gray-900/10 max-w-lg lg:max-w-none">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
               <div className="h-3 w-3 rounded-full bg-red-500"></div>
               <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
               <div className="h-3 w-3 rounded-full bg-green-500"></div>
               <span className="text-xs text-gray-500 ml-2">pipeline_config.json</span>
            </div>
            <pre className="overflow-x-auto">
{`{
  "study_id": "ross_1977_false_consensus",
  "pipeline": {
    "extraction": {
        "source": "pdf",
        "method": "agentic_parser"
    },
    "simulation": {
        "participants": 100,
        "demographics": "matched_population"
    },
    "evaluation": {
        "metric": "correlation_coefficient",
        "ground_truth": "human_data_v1"
    }
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
