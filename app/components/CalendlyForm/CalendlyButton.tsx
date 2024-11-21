"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CalendlyButton = () => {
  return (
    <div className="inline-flex flex-col sm:flex-row items-center rounded-full border border-blue-600/20 bg-blue-600/10 text-sm backdrop-blur-xl">
      <Link
        href="https://calendly.com/brandformstudio/30min"
        className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white group relative"
      >
        <span>Book a call</span>
        <div className="relative w-4 h-4 ml-2 overflow-hidden">
          <ArrowRight className="absolute h-4 w-4 transform transition-all duration-300 ease-in-out translate-x-0 group-hover:translate-x-[200%]" />
          <ArrowRight className="absolute h-4 w-4 transform transition-all duration-300 ease-in-out -translate-x-[200%] group-hover:translate-x-0" />
        </div>
      </Link>
      <span className="py-1.5 px-3 text-gray-300 text-center">
        Free Consultation Call
      </span>
    </div>
  );
};

export default CalendlyButton;
