const datasets = [
  {
    title: "The False Consensus Effect",
    authors: "Ross et al., 1977",
    tags: ["Social Psychology", "Medium Difficulty"],
    phenomenon: "False consensus bias",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    title: "Measures of Anchoring",
    authors: "Jacowitz & Kahneman, 1995",
    tags: ["Cognitive Psychology", "Easy"],
    phenomenon: "Anchoring effect",
     color: "bg-green-50 text-green-700 border-green-200"
  },
  {
    title: "Framing of Decisions",
    authors: "Tversky & Kahneman, 1981",
    tags: ["Behavioral Economics", "Easy"],
    phenomenon: "Framing effect",
     color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    title: "Subjective Probability",
    authors: "Kahneman & Tversky, 1972",
    tags: ["Cognitive Psychology", "Medium"],
    phenomenon: "Representativeness heuristic",
     color: "bg-orange-50 text-orange-700 border-orange-200"
  }
];

export default function DatasetGrid() {
  return (
    <div id="dataset" className="py-24 bg-white sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Study Dataset</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A curated collection of replicated psychological studies used for evaluation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {datasets.map((study) => (
            <div key={study.title} className="flex flex-col gap-y-4 rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
               <div className="flex items-center justify-between">
                 <h3 className="text-lg font-semibold leading-8 text-gray-900 font-serif">
                   {study.title}
                 </h3>
                 <span className="text-sm text-gray-500 italic">{study.authors}</span>
               </div>
               
               <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                      <span key={tag} className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${study.color} ring-opacity-20`}>
                        {tag}
                      </span>
                  ))}
               </div>
               
               <div className="mt-2 text-sm text-gray-600">
                 <strong className="text-gray-900">Phenomenon:</strong> {study.phenomenon}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
