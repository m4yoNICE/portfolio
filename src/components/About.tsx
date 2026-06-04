"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiReact as SiRN,
  SiMysql,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const skills = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiPython, label: "Python" },
  { icon: SiFastapi, label: "FastAPI" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiGit, label: "Git" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 mt-[-2px]"
      style={{
        backgroundColor: "#3e2b66",
        backgroundImage: "url('/yunjin_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top fade — transparent to match whatever the wave bottom is */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3e2b66] to-transparent z-10" />

      {/* Main overlay */}
      <div className="absolute inset-0 bg-[#3e2b66]/65 z-0" />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#504c71] z-10" />
      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-20">
        {/* About */}
        <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
          Who I am
        </p>
        <h2 className="font-['Sora'] text-4xl font-bold text-[#E1D8EF] mb-6">
          About
        </h2>
        <p className="text-[#c4b8d4] text-lg leading-relaxed max-w-2xl mb-10">
          BSIT graduate from UC Lapu-Lapu and Mandaue. I build full-stack web
          apps and ML systems using React Native, Next.js, FastAPI, and Node.js.
          Recently completed my OJT at Symph Inc. working on a fintech budgeting
          product.
        </p>

        {/* Stats */}
        <div className="flex gap-12 mb-16">
          <div>
            <p className="font-['Sora'] text-3xl font-bold text-[#F29A30]">
              2+
            </p>
            <p className="text-sm text-[#c4b8d4]">Years building</p>
          </div>
          <div>
            <p className="font-['Sora'] text-3xl font-bold text-[#F29A30]">
              5+
            </p>
            <p className="text-sm text-[#c4b8d4]">Projects shipped</p>
          </div>
          <div>
            <p className="font-['Sora'] text-3xl font-bold text-[#F29A30]">1</p>
            <p className="text-sm text-[#c4b8d4]">OJT completed</p>
          </div>
        </div>

        {/* Skills */}
        <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
          What I use
        </p>
        <h3 className="font-['Sora'] text-4xl font-bold text-[#E1D8EF] mb-8">
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c4b8d4]/40 bg-[#ffffff0d] text-[#c4b8d4] select-none"
            >
              <s.icon size={16} />
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
