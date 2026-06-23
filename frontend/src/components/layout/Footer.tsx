export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Brand */}
          <div className="space-y-2">
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Senti<span className="text-indigo-600">Mind</span>
            </span>
            <p className="text-xs text-slate-500 max-w-sm mx-auto md:mx-0">
              High-fidelity Natural Language Processing analysis engine powered by Flask and TextBlob.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Workspace
            </a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">
              Workflow
            </a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">
              Methodology
            </a>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right space-y-1 text-xs text-slate-400">
            <p>Developed with React & Tailwind CSS v4</p>
            <p className="text-slate-500 font-medium">© {currentYear} SentiMind. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
