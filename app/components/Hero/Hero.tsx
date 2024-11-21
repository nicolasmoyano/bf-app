import { Button } from "@/components/ui/button";
import Chip from "../ui/Chip/Chip";
import { ParticleBackground } from "../ParticleBackground/ParticleBackground";
import CalendlyButton from "../CalendlyForm/CalendlyButton";
import { Heart } from "lucide-react";

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
          <CalendlyButton />
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
              Get in touch
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
