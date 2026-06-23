import Card from "../ui/Card";

export default function ProcessFlow() {
  const steps = [
    {
      number: "01",
      title: "Input Ingestion",
      subtitle: "Web Interface",
      description: "User provides text in the glassmorphic React workspace. Character limits and presets are managed locally.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Transport Layer",
      subtitle: "REST API Endpoint",
      description: "The text payload is serialized and sent to the Flask backend via an asynchronous Axios HTTP POST request.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      number: "03",
      title: "NLP Processing",
      subtitle: "TextBlob Classifier",
      description: "The Python NLP model calculates polarity (-1.0 to 1.0) and subjectivity (0.0 to 1.0) utilizing lexicons.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Visualization",
      subtitle: "Responsive Gauges",
      description: "The frontend parses response metrics and renders interactive dashboard gauges with semantic color glows.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent sm:text-4xl">
          System Data Workflow
        </h2>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          Understand how text values flow through our NLP architecture from the UI down to the core lexical parser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <Card key={idx} hoverable className="flex flex-col relative h-full bg-white/60">
            {/* Step Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200/80 shadow-sm">
                {step.icon}
              </div>
              <span className="text-sm font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/50">
                {step.number}
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-base font-bold text-slate-800">{step.title}</h3>
              <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mt-0.5 mb-3">{step.subtitle}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
