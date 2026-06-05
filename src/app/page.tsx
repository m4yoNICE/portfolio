import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/ui/LoadingScreen";
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}