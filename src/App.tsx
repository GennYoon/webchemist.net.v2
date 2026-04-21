import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Nav } from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5f5f5]">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
