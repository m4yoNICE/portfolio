"use client";
import { useEffect } from "react";

interface ToastProps {
  show: boolean;
  message?: string;
}

export default function EmailToast({
  show,
  message = "Email copied!",
}: ToastProps) {
  if (!show) return null;

  return (
    <>
      {/* Desktop — top right */}
      <div
        className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-3 bg-[#311c55] border border-[#575068] text-[#E1D8EF] px-6 py-4 rounded-2xl shadow-2xl"
        style={{ animation: "fadeDown 0.3s ease both" }}
      >
        <span className="text-2xl">✉️</span>
        <div className="flex flex-col">
          <span className="font-['Sora'] font-bold text-base text-[#E1D8EF]">
            {message}
          </span>
          <span className="text-xs text-[#a897b5]">
            cenizaroswellrey@gmail.com
          </span>
        </div>
      </div>

      {/* Mobile — bottom center */}
      <div
        className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center gap-3 bg-[#311c55] border border-[#575068] text-[#E1D8EF] px-6 py-4 rounded-2xl shadow-2xl w-[90vw] justify-center"
        style={{ animation: "fadeUp 0.3s ease both" }}
      >
        <span className="text-2xl">✉️</span>
        <div className="flex flex-col">
          <span className="font-['Sora'] font-bold text-base text-[#E1D8EF]">
            {message}
          </span>
          <span className="text-xs text-[#a897b5]">
            cenizaroswellrey@gmail.com
          </span>
        </div>
      </div>
    </>
  );
}
