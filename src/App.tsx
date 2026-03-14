import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemAgitate } from './components/ProblemAgitate';
import { ProcessSteps } from './components/ProcessSteps';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Founder } from './components/Founder';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-background font-sans text-brand-nearBlack selection:bg-brand-accent/30">
      <Navigation />
      
      <main>
        <Hero />
        <ProblemAgitate />
        <ProcessSteps />
        <Comparison />
        <Pricing />
        <Founder />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
