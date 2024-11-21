import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, Zap, Target } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: LayoutTemplate,
      title: "Effortless design solutions",
      description:
        "Leverage high-quality, ready-to-go design tools paired with our creative expertise to ensure your brand always looks polished and professional. Simplicity meets impact.",
    },
    {
      icon: Zap,
      title: "Lightning-Fast turnaround",
      description:
        "Our streamlined approach ensures your designs are delivered quickly without compromising quality, helping you stay ahead of your deadlines.",
    },
    {
      icon: Target,
      title: "Designed with your goals in mind",
      description:
        "From eye-catching visuals to optimized layouts, every design is thoughtfully created to align with your business goals - because your success is our priority.",
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
