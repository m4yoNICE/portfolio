"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Wave from "react-wavify";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const boatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [dragging, setDragging] = useState(false);
  const [posX, setPosX] = useState(25);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(25);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const amplitude = 10;
    const speed = 0.2;
    const points = 3;

    const animate = (ts: number) => {
      if (lastTime.current !== null) {
        t += ((ts - lastTime.current) / 1000) * speed;
      }
      lastTime.current = ts;

      if (boatRef.current && sectionRef.current) {
        const sectionWidth = sectionRef.current.offsetWidth;
        const boatXpx = (posX / 100) * sectionWidth;
        const segmentWidth = sectionWidth / (points + 1);
        const angle = (boatXpx / segmentWidth) * Math.PI + t * Math.PI * 2;
        const waveY = Math.sin(angle) * amplitude;
        const rotate = Math.cos(angle) * 4;

        if (!dragging) {
          boatRef.current.style.transform = `translateX(-50%) translateY(${waveY}px) rotate(${rotate}deg)`;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      lastTime.current = null;
    };
  }, [dragging, posX]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!dragging) return;
      const containerWidth = window.innerWidth;
      const delta =
        ((e.touches[0].clientX - dragStartX.current) / containerWidth) * 100;
      const newPos = Math.min(85, Math.max(2, dragStartPos.current + delta));
      setPosX(newPos);
    },
    [dragging],
  );

  const boatBottom = 160 - 10;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-white pb-[220px]"
      onMouseMove={(e) => {
        if (!dragging) return;
        const containerWidth = window.innerWidth;
        const delta = ((e.clientX - dragStartX.current) / containerWidth) * 100;
        const newPos = Math.min(95, Math.max(5, dragStartPos.current + delta));
        setPosX(newPos);
      }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setDragging(false)}
    >
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pt-24 flex flex-col-reverse md:flex-row md:items-start md:gap-8 md:justify-end">
        <div className="text-center md:text-right flex flex-col justify-between gap-8 flex-1 min-w-0">
          <div style={{ animation: "fadeUp 0.6s ease 0ms both forwards" }}>
            <h1 className="font-['Sora'] text-4xl md:text-7xl font-bold text-[#1a1720] leading-tight mb-4">
              Ceniza, Roswell Rey
              <br />
              <span className="text-[#575068] text-xl md:text-3xl font-medium">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-[#7a6f8a] text-base md:text-lg leading-relaxed">
              BSIT graduate building web apps and ML systems.
              <br />
              Cebu-based, open to remote.
            </p>
          </div>

          <div
            className="flex flex-col gap-4"
            style={{ animation: "fadeUp 0.6s ease 150ms both forwards" }}
          >
            <div className="flex gap-3 justify-center md:justify-end">
              <a
                href="#projects"
                className="bg-[#575068] text-white text-sm md:text-base font-medium px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-[#464057] transition-colors"
              >
                View Projects
              </a>
              <a
                href="/Resume.pdf"
                className="text-sm md:text-base text-[#7a6f8a] border border-[#e5e0ee] px-6 md:px-8 py-3 md:py-4 rounded-md hover:border-[#575068] transition-colors"
              >
                Download CV
              </a>
            </div>
            <div className="flex gap-6 justify-center md:justify-end">
              <a
                href="mailto:youremail@gmail.com"
                className="text-[#7a6f8a] hover:text-[#575068] transition-colors"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
              <a
                href="https://github.com/m4yoNICE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a6f8a] hover:text-[#575068] transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a6f8a] hover:text-[#575068] transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex-shrink-0 w-[200px] h-[240px] md:w-[360px] md:h-[420px] relative overflow-hidden rounded-lg mx-auto md:mx-0 mb-6 md:mb-0"
          style={{ animation: "fadeUp 0.6s ease 300ms both forwards" }}
        >
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
        style={{
          bottom: `${boatBottom}px`,
          left: `${posX}%`,
          transform: "translateX(-50%)",
        }}
        onMouseDown={(e) => {
          setDragging(true);
          dragStartX.current = e.clientX;
          dragStartPos.current = posX;
        }}
        onTouchStart={(e) => {
          setDragging(true);
          dragStartX.current = e.touches[0].clientX;
          dragStartPos.current = posX;
        }}
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

      {/* Wave 1 */}
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

      {/* Wave 2 */}
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