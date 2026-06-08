"use client";
import { useRef, useState } from "react";
import Reveal from "./ui/Reveal";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-24 px-6"
        style={{
          backgroundColor: "#2d1f4e",
          backgroundImage: "url('/yunjin_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#2d1f4e]/70 z-0" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs font-semibold text-[#cc92a8] tracking-widest uppercase mb-2">
              Get in touch
            </p>
            <h2 className="font-['Sora'] text-3xl font-bold text-[#E1D8EF] mb-4">
              Contact
            </h2>
            <p className="text-[#c4b8d4] text-base mb-8">
              Open to opportunities — let&apos;s talk.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-xl"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="px-4 py-3 rounded-lg border border-[#cc92a8]/40 bg-[#ffffff0d] text-[#E1D8EF] text-sm placeholder:text-[#8b6ba8] focus:outline-none focus:border-[#cc92a8] transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your email"
                required
                className="px-4 py-3 rounded-lg border border-[#cc92a8]/40 bg-[#ffffff0d] text-[#E1D8EF] text-sm placeholder:text-[#8b6ba8] focus:outline-none focus:border-[#cc92a8] transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                required
                className="px-4 py-3 rounded-lg border border-[#cc92a8]/40 bg-[#ffffff0d] text-[#E1D8EF] text-sm placeholder:text-[#8b6ba8] focus:outline-none focus:border-[#cc92a8] transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#cc92a8] text-[#2d1f4e] text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d9a8bc] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-[#cc92a8]">
                  Message sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-6 bg-[#3b2c5f]">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <p className="text-xs text-[#F29A30]">
            © 2026 Roswell Ceniza&apos;s Portfolio
          </p>
        </div>
      </footer>
    </>
  );
}