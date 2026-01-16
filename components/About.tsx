export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="https://images.unsplash.com/photo-1620912189868-3932a9692d4f?q=80&w=2070&auto=format&fit=crop"
                alt="Human psychology art"
              />
              <div className="absolute inset-0 bg-gray-900 mix-blend-multiply opacity-80" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-600">Project Context</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                What is HS-Bench?
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                HS-Bench is a pipeline designed to bridge the gap between static psychological literature and dynamic LLM evaluation. It handles the full lifecycle: from filtering PDFs for replicability, to extracting statistical "Ground Truth" from human participants, to generating executable study configurations.
                </p>
                <div className="mt-8 border-l-4 border-blue-600 pl-4 bg-gray-50 py-2 pr-2">
                    <h3 className="font-bold text-gray-900 font-serif">Generation Pipeline</h3>
                    <p className="text-sm text-gray-600">Utilizes LLMs to parse academic papers and extract experimental designs.</p>
                </div>
                <div className="mt-4 border-l-4 border-green-600 pl-4 bg-gray-50 py-2 pr-2">
                    <h3 className="font-bold text-gray-900 font-serif">Validation Pipeline</h3>
                    <p className="text-sm text-gray-600">Automated agents verify that the generated benchmarks mathematically align with the original paper's reported statistics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
