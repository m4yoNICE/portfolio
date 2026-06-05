import ProjectCard from "./ui/ProjectCard";
import Reveal from "./ui/Reveal";

const projects = [
  {
    category: "Work Project",
    title: "Finspend",
    date: "Feb 2026",
    description:
      "Personal finance app for young earners to track spending and build better money habits. Contributed to full-stack development during OJT at Symph, working across a Next.js web app and React Native mobile client backed by NestJS and Supabase.",
    tags: ["Next.js", "NestJS", "React Native", "Supabase", "TypeScript"],
    demoUrl: "https://finspend.io/",
    imageUrl: "/projects/Finspend.png",
  },
  {
    category: "Work Project",
    title: "Daily Drip",
    date: "April 2026",
    description:
      "Budgeting app that converts monthly income into a single daily spending number and turns sticking to it into a game. Built at Symph — features spending buckets, streaks, boss fights tied to savings goals, and XP/leveling mechanics to keep the habit alive.",
    tags: ["Next.js", "NestJS", "React Native", "Supabase", "TypeScript"],
    demoUrl: "https://daily-drip.app/",
    imageUrl: "/projects/DailyDrip.png",
  },
  {
    category: "Capstone Project",
    title: "DermaScan",
    date: "Oct 2025",
    description:
      "ML-powered skin condition classifier with dermatologist-curated treatment recommendations. Built as a solo ML developer on a 5-person team using Google Derm Foundation embeddings, FastAPI inference server, and a React Native frontend.",
    tags: [
      "React Native",
      "FastAPI",
      "Python",
      "Node.js",
      "MySQL",
      "HuggingFace",
    ],
    demoUrl: "https://dermascanplus.vercel.app/",
    githubUrl: "https://github.com/m4yoNICE/DermaScan",
    imageUrl: "/projects/Dermascan+.png",
  },
  {
    category: "Personal Project",
    title: "Pawnalysis",
    date: "May 2026",
    description:
      "Chess analysis web app that turns raw Stockfish UCI output into human-readable prose using an LLM. Paste a PGN, get back a full game breakdown. Currently in development.",
    tags: ["Next.js", "FastAPI", "Stockfish", "Python"],
    githubUrl: "https://github.com/m4yoNICE/Pawnalysis",
    imageUrl: "/projects/Pawnalysis.png",
  },
  {
    category: "Personal Project",
    title: "Mangananggal",
    date: "2024",
    description:
      "Manga browsing app built as a practice project for learning REST APIs. Fetches data from the MangaDex API with a React frontend and an Express/Node.js backend connected to MySQL.",
    tags: ["React", "Express", "Node.js", "MySQL"],
    githubUrl: "https://github.com/m4yoNICE/Mangananggal",
    imageUrl: "/projects/Mangananggal.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
            What I built
          </p>
          <h2 className="font-['Sora'] text-3xl font-bold text-[#575068] mb-10">
            Projects
          </h2>
        </Reveal>
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
