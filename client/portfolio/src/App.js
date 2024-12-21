import './App.css';
import Hero from './components/Hero';
import { TimelineDemo } from './components/TimelineDemo';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <TimelineDemo />
      <BentoGrid />
    </main>
  );
}

export default App;