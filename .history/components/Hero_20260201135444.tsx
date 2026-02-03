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
            HumanStudy-Bench: Towards AI <span className="text-blue-600">Agent Design</span> for Participant Simulation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A reusable platform converting human study research papers into standardized testbed for AI agents to replay human-subject experiments end-to-end, evaluating agent alignment with human participants at the level of scientific inference.
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
      </div>
    </div>
  );
}
