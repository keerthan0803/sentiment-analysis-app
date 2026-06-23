import Card from "../ui/Card";

export default function Methodology() {
  const definitions = [
    {
      title: "Sentiment Analysis",
      metric: "Natural Language Processing",
      description: "An algorithmic subfield of AI that evaluates, classifies, and scales the emotional undertones and semantic charges within text documents.",
      highlight: "Lexical & Machine Learning models",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Semantic Polarity",
      metric: "Scale: -1.00 to +1.00",
      description: "Quantifies the positive or negative valence of the statement. Scores close to -1 represent negative views, 0 indicates objective neutrality, and +1 signals positive reviews.",
      highlight: "Positivity vs. Negativity scale",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Linguistic Subjectivity",
      metric: "Scale: 0.00 to 1.00",
      description: "Measures the presence of personal opinion, emotion, or bias vs. objective facts. 0.0 indicates purely objective descriptions, while 1.0 represents highly subjective, opinionated texts.",
      highlight: "Fact vs. Opinion percentage",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "TextBlob Engine",
      metric: "NLTK Lexicon Classifier",
      description: "A Python NLP framework that operates on lexical rule bases. It maps words to pre-scored sentiment dictionaries, accounting for modifiers, negations, and intensifiers.",
      highlight: "Rule-based lexical mapping",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent sm:text-4xl">
          Methodology & Metrics
        </h2>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          Understand the underlying algorithms and scales governing semantic interpretation in computational linguistics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {definitions.map((def, idx) => (
          <Card key={idx} hoverable className="flex gap-5 items-start p-6 bg-white/60 border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200/80 shadow-sm flex-shrink-0">
              {def.icon}
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-lg font-bold text-slate-800">{def.title}</h3>
                <span className="text-xs text-indigo-600 font-mono font-medium">{def.metric}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{def.description}</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {def.highlight}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
