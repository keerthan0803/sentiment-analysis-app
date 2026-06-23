import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Gauge from "../ui/Gauge";
import { analyzeText } from "../../services/sentimentApi";
import type { SentimentResponse } from "../../types/sentiment";

const PRESETS = [
  {
    label: "Positive Review",
    text: "The customer service was absolutely phenomenal! They resolved my issue in under five minutes, and the representative was incredibly polite and helpful. Highly recommend!",
  },
  {
    label: "Negative Bug Report",
    text: "This software is an absolute nightmare to use. The interface is slow, it crashes constantly, and the latest update deleted half of my project files. Extremely disappointed.",
  },
  {
    label: "Factual Report",
    text: "The package contains the device, a charging cable, and a brief instructional manual. It operates on a standard lithium battery and has three distinct settings.",
  },
  {
    label: "Mixed Opinion",
    text: "I think the movie had a decent plot, but the acting felt somewhat forced at times, making the overall experience feel rather average.",
  },
];

export default function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SentimentResponse | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError("Please enter or paste some text to analyze.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await analyzeText(text);
      setResult(response);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the Flask NLP backend. Make sure it is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setResult(null);
    setError("");
  };

  const handleSelectPreset = (presetText: string) => {
    setText(presetText);
    setResult(null);
    setError("");
  };

  const getEmoji = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "😊";
      case "Negative":
        return "😞";
      default:
        return "😐";
    }
  };

  const getBadgeType = (sentiment: string): "positive" | "negative" | "neutral" => {
    switch (sentiment) {
      case "Positive":
        return "positive";
      case "Negative":
        return "negative";
      default:
        return "neutral";
    }
  };

  const getExplanation = (sentiment: string, polarity: number, subjectivity: number) => {
    const sentimentDesc =
      sentiment === "Positive"
        ? "expresses a positive sentiment overall"
        : sentiment === "Negative"
        ? "expresses a negative sentiment overall"
        : "is neutral and balanced overall";

    const subjectivityDesc =
      subjectivity > 0.6
        ? "Highly subjective and opinion-based"
        : subjectivity < 0.3
        ? "Largely objective, stating factual information"
        : "Moderately subjective, combining some opinion with fact";

    return `The model indicates the input text ${sentimentDesc} (Polarity Score: ${polarity.toFixed(
      2
    )}). ${subjectivityDesc} (Subjectivity Score: ${subjectivity.toFixed(2)}).`;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Headings */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          Natural Language Processing
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-4">
          Sentiment Analysis Workspace
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Leverage Flask and the TextBlob computational NLP engine to evaluate semantic emotional polarity and subjectivity instantly.
        </p>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Input */}
        <div className="lg:col-span-7">
          <Card className="shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="nlp-text-input" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
                Input Document
              </label>
              <span className="text-xs text-slate-400 font-mono">
                {text.length} / 1000 chars
              </span>
            </div>

            <textarea
              id="nlp-text-input"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (error) setError("");
              }}
              maxLength={1000}
              placeholder="Type, paste, or select a preset review below to perform sentiment diagnostics..."
              className="w-full h-56 p-4 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all resize-none text-sm leading-relaxed"
            />

            {/* Visual character progression bar */}
            <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500/60 transition-all duration-300"
                style={{ width: `${(text.length / 1000) * 100}%` }}
              />
            </div>

            {/* Presets */}
            <div className="mt-6">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Quick Test Samples
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPreset(preset.text)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
              <Button variant="secondary" onClick={handleClear} disabled={!text}>
                Clear
              </Button>
              <Button onClick={handleAnalyze} isLoading={loading} disabled={!text.trim()}>
                Analyze Sentiment
              </Button>
            </div>

            {error && (
              <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <svg className="w-4.5 h-4.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </Card>
        </div>

        {/* Right Column: Diagnostic Results */}
        <div className="lg:col-span-5">
          {result ? (
            <Card className="border-indigo-500/20 shadow-xl relative overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
                  Analysis Outcome
                </h3>
                <Badge label={result.sentiment} type={getBadgeType(result.sentiment)} />
              </div>

              {/* Big Emoji / Sentiment Summary */}
              <div className="flex items-center gap-4.5 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="text-5xl select-none animate-float">
                  {getEmoji(result.sentiment)}
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Classification</span>
                  <h4 className="text-2xl font-bold text-slate-800">{result.sentiment} Sentiment</h4>
                </div>
              </div>

              {/* Gauges */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end text-sm">
                    <span className="text-slate-600 font-semibold">Polarity</span>
                    <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {result.polarity >= 0 ? "+" : ""}{result.polarity.toFixed(4)}
                    </span>
                  </div>
                  <Gauge type="polarity" value={result.polarity} />
                </div>

                <div>
                  <div className="flex justify-between items-end text-sm pt-2">
                    <span className="text-slate-600 font-semibold">Subjectivity</span>
                    <span className="text-xs font-mono font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">
                      {(result.subjectivity * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Gauge type="subjectivity" value={result.subjectivity} />
                </div>
              </div>

              {/* Insight Text */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block mb-1">
                  NLP Diagnostics
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {getExplanation(result.sentiment, result.polarity, result.subjectivity)}
                </p>
              </div>
            </Card>
          ) : (
            <Card className="h-[432px] flex flex-col items-center justify-center text-center border-dashed border-slate-200 bg-white/50">
              {loading ? (
                <div className="space-y-4">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-100 border-t-indigo-500 animate-spin"></div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Processing Diagnostics</h4>
                    <p className="text-xs text-slate-400">Calculating linguistic weights & scores...</p>
                  </div>
                </div>
              ) : (
                <div className="max-w-xs space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto text-slate-400 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12a12.901 12.901 0 00.3 3m-.3-3H2.25M3 12a13.13 13.13 0 0115.111-5.776" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider font-sans">Diagnostic Results</h4>
                    <p className="text-xs text-slate-400">Input text and click "Analyze Sentiment" to generate linguistic metrics.</p>
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
