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
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">
          Apps, websites, logos & more
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <Button
              key={service.name}
              className={`px-4 py-2 rounded-full ${service.color} text-white`}
            >
              {service.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
