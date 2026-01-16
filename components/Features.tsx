export default function Features() {
  return (
    <div className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Pipeline Architecture</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From static PDF to dynamic benchmark in three stages.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            
            {/* Stage 1 */}
            <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                 </div>
                 Stage 1: Replicability Filter
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Auto-analysis of psychological research PDFs to filter and identify studies containing replicable text-based experiments.</p>
              </dd>
            </div>

            {/* Stage 2 */}
            <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                 </div>
                 Stage 2: Data Extraction
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Extracts experimental materials, conditions, and human ground truth statistical data for baseline comparison.</p>
              </dd>
            </div>

            {/* Stage 3 */}
            <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
               <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                 <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                 </div>
                 Stage 3: Generation
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Produces structured JSON benchmarks for mass LLM evaluation, ensuring generated prompts align with original study protocols.</p>
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}
