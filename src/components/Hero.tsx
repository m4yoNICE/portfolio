"use client";
import { useEffect, useRef, useState } from "react";
import Wave from "react-wavify";
import Image from "next/image";

export default function Hero() {
  const boatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [dragging, setDragging] = useState(false);
  const [posX, setPosX] = useState(25);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(25);

  useEffect(() => {
    let frame: number;
    let t = 0;

    // Match these exactly to your Wave 2 options
    const amplitude = 10;
    const speed = 0.2;
    const points = 3;
    const waveHeight = 160; // matches style={{ height: "160px" }} on Wave 2 container

    const animate = () => {
      t += speed * 0.016;

      if (boatRef.current && sectionRef.current) {
        const sectionWidth = sectionRef.current.offsetWidth;
        const boatXpx = (posX / 100) * sectionWidth;

        // Replicate wavify sine math
        const segmentWidth = sectionWidth / (points + 1);
        const angle = (boatXpx / segmentWidth) * Math.PI + t * Math.PI * 2;
        const waveY = Math.sin(angle) * amplitude;

        // Wave 2 sits at bottom-[-2px], so wave crest is at:
        // sectionBottom - waveHeight + (waveHeight/2) - waveY
        const rotate = Math.cos(angle) * 4;

        if (!dragging) {
          boatRef.current.style.transform = `translateY(${waveY}px) rotate(${rotate}deg)`;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [dragging, posX]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    dragStartX.current = e.clientX;
    dragStartPos.current = posX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const containerWidth = window.innerWidth;
    const delta = ((e.clientX - dragStartX.current) / containerWidth) * 100;
    const newPos = Math.min(85, Math.max(2, dragStartPos.current + delta));
    setPosX(newPos);
  };

  const handleMouseUp = () => setDragging(false);

  // Wave crest sits at: bottom of section - waveHeight + half waveHeight
  // pb-[220px] means wave area is ~220px from bottom
  // boat bottom should be roughly at the wave crest line
  const boatBottom = 160 - 10; // waveHeight - some offset to sit ON the crest

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-white pb-[220px]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pt-24 flex items-start gap-8 justify-end">
        <div className="text-right flex flex-col justify-between gap-8">
          <div>
            <h1 className="font-['Sora'] text-7xl font-bold text-[#1a1720] leading-tight mb-4">
              Ceniza, Roswell Rey
              <br />
              <span className="text-[#575068] text-3xl font-medium">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-[#7a6f8a] text-lg leading-relaxed">
              BSIT graduate building web apps and ML systems.
              <br />
              Cebu-based, open to remote.
            </p>
          </div>
          <div className="flex gap-3 justify-end">
            <a
              href="#projects"
              className="bg-[#575068] text-white text-base font-medium px-8 py-4 rounded-md hover:bg-[#464057] transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              className="text-base text-[#7a6f8a] border border-[#e5e0ee] px-8 py-4 rounded-md hover:border-[#575068] transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 w-[360px] h-[420px] relative overflow-hidden rounded-lg">
          <Image
            src="/roswell.png"
            alt="Roswell"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Takodachi */}
      <div
        ref={boatRef}
        className={`absolute z-30 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ bottom: `${boatBottom}px`, left: `${posX}%` }}
        onMouseDown={handleMouseDown}
      >
        <Image
          src="/takodachi_boat.png"
          alt="takodachi"
          width={100}
          height={100}
          className="drop-shadow-md select-none"
          draggable={false}
        />
      </div>

      {/* Wave 1 — depth */}
      <div
        className="absolute bottom-[-1px] left-0 right-0 z-10 pointer-events-none"
        style={{ height: "200px" }}
      >
        <Wave
          fill="#3e2b66"
          paused={false}
          style={{ display: "block", height: "100%", opacity: 0.5 }}
          options={{ height: 5, amplitude: 20, speed: 0.15, points: 3 }}
        />
      </div>

      {/* Wave 2 — main, boat tracks this one */}
      <div
        className="absolute bottom-[-2px] left-0 right-0 z-20 pointer-events-none"
        style={{ height: "160px" }}
      >
        <Wave
          fill="url(#purpleGradient)"
          paused={false}
          style={{ display: "block", height: "100%" }}
          options={{ height: 10, amplitude: 10, speed: 0.2, points: 3 }}
        >
          <defs>
            <linearGradient
              id="purpleGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#575068" />
              <stop offset="100%" stopColor="#3e2b66" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </section>
  );
}
