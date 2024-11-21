import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Chip from "../ui/Chip/Chip";
import { ParticleBackground } from "../ParticleBackground/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative w-full bg-slate-950 py-8 -mt-9 md:py-16 lg:py-24 flex items-center">
      <ParticleBackground />
      {/* Background stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: "0.1",
          }}
        />
      </div>

      <div className="container px-4 mt-20 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Top CTA */}
          <div className="inline-flex flex-col sm:flex-row items-center rounded-full border border-blue-600/20 bg-blue-600/10 text-sm backdrop-blur-xl">
            <Link
              href="#book-call"
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

          {/* Main content */}
          <div className="space-y-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white px-4">
              Simple design solutions <br className="hidden sm:block" /> that
              speak to your audience.
            </h1>
            <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-400 px-4">
              modern, responsive, and built to impress.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold text-white hover:bg-blue-600/90"
            >
              Get this Template
            </Button>
            <Chip
              icon={<Heart />}
              variant="green"
              className="w-full sm:w-auto justify-center"
            >
              Loved by over 3 million users
            </Chip>
          </div>
        </div>
      </div>
    </section>
  );
}
