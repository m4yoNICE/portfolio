"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiMysql,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import Reveal from "./ui/Reveal";

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
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3e2b66] to-transparent z-10" />
      <div className="absolute inset-0 bg-[#3e2b66]/65 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#504c71] z-10" />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* About */}
        <Reveal>
          <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
            Who I am
          </p>
          <h2 className="font-['Sora'] text-4xl font-bold text-[#E1D8EF] mb-6">
            About
          </h2>
        </Reveal>

        <Reveal delay={100}>
          {/* eslint-disable react/no-unescaped-entities */}
          <div className="text-[#c4b8d4] text-lg leading-relaxed max-w-2xl mb-10 space-y-4">
            <p>
              I'm Roswell, an honor graduate with a BSIT from UC Lapu-Lapu and
              Mandaue in Cebu, Philippines. I build full-stack web applications
              and machine learning systems — the kind of projects that have real
              moving parts and actual problems to solve.
            </p>
            <p>
              My stack centers around Next.js, React Native, FastAPI, and
              Node.js, but I'm less attached to tools than I am to understanding
              how things work under the hood. That curiosity is what led me to
              build DermaScan — an ML-powered skin condition classifier where I
              handled the entire AI pipeline solo, from embedding extraction to
              deployment on HuggingFace Spaces. It's also what pushed me to
              build Pawnalyze, a chess analysis web app that combines Stockfish
              with LLM-generated explanations to make engine analysis actually
              readable — a project that started from years of playing
              competitive chess.
            </p>
            <p>
              I recently completed my OJT at Symph Inc., where I worked on Daily
              Drip, a fintech budgeting product. That experience put me inside a
              real production codebase — shipping UI fixes, handling PRs, and
              learning what it means to write code other people depend on.
            </p>
            <p>
              I'm currently based in Cebu and actively looking for a team to
              grow with.
            </p>
          </div>
          {/* eslint-enable react/no-unescaped-entities */}
        </Reveal>

        {/* Stats */}
        <Reveal delay={200}>
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
              <p className="font-['Sora'] text-3xl font-bold text-[#F29A30]">
                1
              </p>
              <p className="text-sm text-[#c4b8d4]">OJT completed</p>
            </div>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal delay={300}>
          <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
            What I use
          </p>
          <h3 className="font-['Sora'] text-4xl font-bold text-[#E1D8EF] mb-8">
            Skills
          </h3>
        </Reveal>

        <Reveal delay={400}>
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
        </Reveal>
      </div>
    </section>
  );
}