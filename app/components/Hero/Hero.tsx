import { ParticleBackground } from "../ParticleBackground/ParticleBackground";
import CalendlyButton from "../CalendlyForm/CalendlyButton";
import Chip from "../ui/Chip/Chip";

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
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white px-4">
              Scalable design solutions,
              <br />
              tailored to your growth.
            </h1>
            <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Unlimited requests, fast turnarounds, and expert results—all in a
              subscription. Start your journey today with a free consultation.
            </p>
          </div>
          <div className="flex flex-col w-full md:flex-row md:w-fit gap-2">
            <Chip variant="green">Unlimited Design Requests</Chip>
            <Chip variant="green">Fast Turnarounds</Chip>
            <Chip variant="green">Subscription Simplicity</Chip>
            <Chip variant="green">Advanced Services</Chip>
          </div>
        </div>
      </div>
    </section>
  );
}
