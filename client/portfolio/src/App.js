import './App.css';
import Hero from './components/Hero';
import { TimelineDemo } from './components/TimelineDemo';
import BentoGrid from './components/BentoGrid';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <TimelineDemo />
      </section>
      <section id="projects">
        <BentoGrid />
      </section>
    </main>
  );
}

export default App;