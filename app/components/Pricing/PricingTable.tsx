import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    description: "Essential branding and design services",
    price: "5,499",
    features: [
      "Up to 10 design requests per month",
      "1 active task at a time",
      "Turnaround: 3-4 business days",
      "Email-based support",
      "Business cards and stationery",
      "Social media templates",
      "Basic promotional materials(flyers, posters)",
    ],
  },
  {
    name: "Growth",
    description: "Comprehensive design services for growing businesses",
    price: "10,000",
    features: [
      "Up to 20 design requests per month",
      "2 active tasks at a time",
      "Turnaround: 2-3 business days",
      "Priority email support",
      "Dedicated account manager",
      "All Basic Tier services",
      "Social media graphics and carousels",
      "Marketing materials (brochures, banners)",
      "Simple web design elements",
      "Custom illustrations",
    ],
  },
  {
    name: "Scale",
    description: "Full-service package for high-demand businesses",
    price: "30,000",
    features: [
      "Unlimited design requests with priority handling",
      "3 active tasks at a time",
      "Turnaround: 1-2 business days",
      "Dedicated design team",
      "24/7 support via email and chat",
      "Quarterly strategy consultations",
      "All Growth Tier services.",
      "Advanced UI/UX design",
      "Motion graphics and animations",
      "Website and app design mockups",
      "Custom branding kits and style guides",
    ],
  },
];

export default function PricingTable() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Choose the perfect plan for your design needs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className="flex flex-col bg-slate-950/50 border-slate-800 relative overflow-hidden group"
          >
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">
                {tier.price} SEK
                <span className="text-base font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-700 hover:bg-green-800 hover:border-green-300 text-white">
                Choose {tier.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16">
        <Card className="bg-slate-950/50 border-slate-800 relative overflow-hidden group w-1/3">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>
              Tailored solutions for large businesses or unique needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">
              Starting at 35,000 SEK
              <span className="text-base font-normal">/month</span>
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Dedicated team of designers and strategists</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Custom integrations and workflows</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>On-demand consultations and workshops</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>SLA-backed turnaround times</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Fully customizable design services</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Advanced analytics and reporting for design ROI</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Industry-specific solutions</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-700 hover:bg-blue-900 text-white">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
