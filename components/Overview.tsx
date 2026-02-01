export default function Overview() {
  return (
    <div id="overview" className="bg-white py-24 sm:py-32">
       {/* Introduction Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
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
                What is HumanStudy-Bench?
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                HumanStudy-Bench treats participant simulation as an <strong>agent design problem</strong>. It combines a benchmark and execution engine that reconstructs published human-subject experiments via a Filter–Extract–Execute–Evaluate pipeline, replaying trial sequences and original statistical procedures in a shared runtime. We evaluate fidelity at the level of scientific inference using metrics that quantify agreement between human and agent behaviors.
                </p>
                <div className="mt-8 border-l-4 border-blue-600 pl-4 bg-gray-50 py-2 pr-2">
                    <h3 className="font-bold text-gray-900 font-serif">Agent Design Focus</h3>
                    <p className="text-sm text-gray-600">Rather than evaluating raw model capability, we focus on how models are instantiated as AI agents with different specifications (roles, demographics, backstories) that serve as surrogate participants in social science experiments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Visual Pipeline Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Pipeline Architecture</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From published human studies to reusable simulation environment in four stages.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            
            {/* Stage 1: Filter */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                 </div>
                 Stage 1: Filter
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Curates human studies that are scientifically important and practically reproducible, ensuring full experimental details, quantifiable outcomes, and simulation feasibility.</p>
              </dd>
            </div>

            {/* Stage 2: Extract */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                 </div>
                 Stage 2: Extract
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Extracts participants' profiles, experimental designs, statistical tests, and human ground-truth outcomes from unstructured papers into machine-executable representations.</p>
              </dd>
            </div>

            {/* Stage 3: Execute */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
               <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                 </div>
                 Stage 3: Execute
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Runs agent designs through reconstructed experimental protocols, generating trial-level data via a shared execution engine that handles agent sampling, instruction dispatch, and response collection.</p>
              </dd>
            </div>

            {/* Stage 4: Evaluate */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
               <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                 </div>
                 Stage 4: Evaluate
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Compares agent responses against human ground-truth using Probability Alignment Score (PAS) for inferential agreement and Effect Consistency Score (ECS) for effect-size alignment.</p>
              </dd>
            </div>

          </dl>
          
          <div className="mt-16 text-left border-t border-gray-200 pt-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                 <div className="rounded-lg bg-blue-50 p-6">
                    <h3 className="flex items-center font-bold text-gray-900 text-lg">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mr-3">PAS</span>
                        Probability Alignment Score
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">Measures hypothesis consistency at the phenomenon level—whether agents reach the same scientific conclusions as humans. Accounts for uncertainty in human baselines and maps heterogeneous statistical tests to a common probability of agreement.</p>
                 </div>
                 <div className="rounded-lg bg-green-50 p-6">
                    <h3 className="flex items-center font-bold text-gray-900 text-lg">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold mr-3">ECS</span>
                        Effect Consistency Score
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">Measures effect size consistency at the data level—whether agents match the magnitude of human effects. Uses Lin's Concordance Correlation Coefficient to assess both precision (pattern capture) and accuracy (magnitude fidelity).</p>
                 </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
