import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, Zap, Grid2X2 } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: LayoutTemplate,
      title: "Custom Designs",
      description:
        "Tailored websites meticulously crafted to reflect your brand.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description:
        "Optimized for lightning-fast speed to enhance user experience.",
    },
    {
      icon: Grid2X2,
      title: "SEO Friendly",
      description:
        "Designed to improve SEO and increase visibility effortlessly.",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-slate-950/50 border-slate-800 relative overflow-hidden group"
              >
                {/* Grid pattern background */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#4444ff 1px, transparent 1px), linear-gradient(to right, #4444ff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <CardContent className="p-4 md:p-6 relative">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
