"use client";
import { useRef, useState } from "react";
import Reveal from "./ui/Reveal";
import emailjs from "@emailjs/browser";

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
    <section id="contact" className="py-24 bg-white border-t border-[#e5e0ee]">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="font-['Sora'] text-3xl font-bold text-[#575068] mb-4">
            Contact
          </h2>
          <p className="text-[#7a6f8a] text-base mb-8">
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
              className="px-4 py-3 rounded-lg border border-[#e5e0ee] text-sm text-[#1a1720] placeholder:text-[#a897b5] focus:outline-none focus:border-[#575068] transition-colors"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              required
              className="px-4 py-3 rounded-lg border border-[#e5e0ee] text-sm text-[#1a1720] placeholder:text-[#a897b5] focus:outline-none focus:border-[#575068] transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="px-4 py-3 rounded-lg border border-[#e5e0ee] text-sm text-[#1a1720] placeholder:text-[#a897b5] focus:outline-none focus:border-[#575068] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#575068] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#464057] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
