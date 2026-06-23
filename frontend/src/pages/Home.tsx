import Navbar from "../components/layout/Navbar";
import SentimentAnalyzer from "../components/sentiment/SentimentAnalyzer";
import ProcessFlow from "../components/sentiment/ProcessFlow";
import Methodology from "../components/sentiment/Methodology";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Premium ambient decorative glow spheres */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <Navbar />

      <main className="pt-24">
        <SentimentAnalyzer />
        <ProcessFlow />
        <Methodology />
      </main>

      <Footer />
    </div>
  );
}