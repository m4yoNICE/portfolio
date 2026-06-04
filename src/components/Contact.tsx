export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#e5e0ee]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold text-[#F29A30] tracking-widest uppercase mb-2">
          Get in touch
        </p>
        <h2 className="font-['Sora'] text-3xl font-bold text-[#575068] mb-4">
          Contact
        </h2>
        <p className="text-[#7a6f8a] text-base mb-8">
          Open to opportunities — let&apos;s talk.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:youremail@gmail.com"
            className="text-sm text-[#575068] border-b border-[#F29A30] pb-0.5 hover:text-[#F29A30] transition-colors"
          >
            Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#575068] border-b border-[#F29A30] pb-0.5 hover:text-[#F29A30] transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#575068] border-b border-[#F29A30] pb-0.5 hover:text-[#F29A30] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
