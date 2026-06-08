import Reveal from "./ui/Reveal";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Symph Inc.",
    period: "Jan 2026 — Jun 2026",
    type: "OJT",
    bullets: [
      "Built full-stack features on Finspend — a Next.js/NestJS fintech budgeting web app — including auto-budget creation logic, custom expense categories, and a premium paywall with badge component",
      "Resolved UI and data bugs including chart rendering issues, responsive layout fixes, and cross-tab data persistence",
      "Contributed to Daily Drip mobile app — Android QA, social media content campaigns, and Canva graphics for US market launch",
      "Worked within a production NX monorepo using Git branch workflows and PR reviews",
    ],
  },
  {
    role: "ML Developer — Capstone",
    company: "DermaScan",
    period: "2024 — 2025",
    type: "Project",
    bullets: [
      "Sole ML developer on a 5-person team — built a skin condition classifier using Google Derm Foundation embeddings (6144-dim) with a two-stage severity model",
      "Deployed FastAPI inference server on HuggingFace Spaces, Node.js/Express backend on Railway, and React Native/Expo frontend",
      "Integrated camera pipeline via Expo Camera, managed EAS builds, and demoed live during capstone defense",
      "Passed defense with minor revisions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
            Where I&apos;ve been
          </p>
          <h2 className="font-['Sora'] text-3xl font-bold text-[#575068] mb-12">
            Experience
          </h2>
        </Reveal>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 100}>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left — meta */}
                <div className="md:w-[220px] flex-shrink-0">
                  <span className="text-xs font-semibold bg-[#f0eaf3] text-[#575068] border border-[#E1D8EF] px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                  <p className="font-['Sora'] font-bold text-[#1a1720] text-base mt-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-[#7a6f8a] mt-1">{exp.period}</p>
                </div>

                {/* Right — content */}
                <div className="flex-1 border-l-2 border-[#E1D8EF] pl-6">
                  <p className="font-['Sora'] font-semibold text-[#575068] text-lg mb-4">
                    {exp.role}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-[#7a6f8a] leading-relaxed"
                      >
                        <span className="text-[#F29A30] mt-1 flex-shrink-0">
                          ▸
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
