import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Experience from "@/components/Experience";
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}