import EffectSizePlot from "@/components/EffectSizePlot";

export default function Overview() {
  return (
    <div id="overview" className="bg-white py-24 sm:py-32">
       {/* Introduction Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-blue-600">Project Context</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              What is HumanStudy-Bench?
            </h1>
            <div className="max-w-3xl">
              <p className="mt-6">
              HumanStudy-Bench treats participant simulation as an <strong>agent design problem</strong> and provides a standardized testbed — combining an <strong>Execution Engine</strong> that reconstructs full experimental protocols from published studies and a <strong>Benchmark</strong> with standardized evaluation metrics — for <em>replaying human-subject experiments end-to-end</em> with alignment evaluation at the level of scientific inference.
              </p>
              <div className="mt-8 border-l-4 border-blue-600 pl-4 bg-gray-50 py-2 pr-2">
                  <h3 className="font-bold text-gray-900 font-serif">Standardized Testbed</h3>
                  <p className="text-sm text-gray-600">Test different agent designs on the same experiments, run agents through real studies covering 6,000+ trials, and compare results rigorously using inferential-level metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Effect Size Plot (moved to Hero) */}
    </div>
  );
}
