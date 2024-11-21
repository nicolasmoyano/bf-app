/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

const services = [
  { name: "Landing pages", color: "bg-pink-500" },
  { name: "Mobile apps", color: "bg-blue-500" },
  { name: "Logos", color: "bg-green-500" },
  { name: "Branding", color: "bg-yellow-500" },
  { name: "Slide Decks", color: "bg-red-500" },
  { name: "Webflow", color: "bg-purple-500" },
  { name: "Social media", color: "bg-orange-500" },
  { name: "Icons", color: "bg-yellow-400" },
  { name: "Brand Guides", color: "bg-blue-400" },
  { name: "Blog Graphics", color: "bg-teal-400" },
  { name: "+ more", color: "bg-black text-white" },
];

export default function Services() {
  return (
    <div className="text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 max-w-[720px] mx-auto pb-8">
          From Concepts to Campaigns
          <br /> We've Got You Covered
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <Button
              key={service.name}
              className={`px-4 py-2 rounded-full ${service.color} text-white hover:bg-white/20`}
            >
              {service.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
