"use client";
import Image from "next/image";

interface ProjectCardProps {
  category: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  category,
  title,
  date,
  description,
  tags,
  demoUrl,
  githubUrl,
  imageUrl = "/placeholder.png",
}: ProjectCardProps) {
  return (
    <div className="w-full bg-white border border-[#e5e0ee] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
      {/* Image */}
      <div className="w-full md:w-[45%] shrink-0 aspect-[16/10] bg-[#f7f5fa] rounded-xl overflow-hidden border border-[#e5e0ee] relative group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[55%] flex flex-col space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start w-full gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F29A30] block">
              {category}
            </span>
            <h2 className="font-['Sora'] text-2xl md:text-3xl font-semibold text-[#1a1720] tracking-tight">
              {title}
            </h2>
            <p className="text-xs text-[#a897b5] font-medium">{date}</p>
          </div>

          {/* Buttons — only render if url provided */}
          <div className="flex gap-2 shrink-0">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#575068] hover:bg-[#464057] rounded-lg text-xs font-medium text-white transition-all duration-200"
              >
                View Demo ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f7f5fa] hover:bg-[#E1D8EF] border border-[#e5e0ee] rounded-lg text-xs font-medium text-[#575068] hover:text-[#311c55] transition-all duration-200"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#7a6f8a] text-justify">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#f0eaf3] text-[#575068] text-xs font-medium rounded-md border border-[#E1D8EF] hover:bg-[#E1D8EF] transition-colors duration-150 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
