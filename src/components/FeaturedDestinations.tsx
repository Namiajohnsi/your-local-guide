import DestinationCard from "./DestinationCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Grand Marina Resort",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      rating: 4.9,
      reviews: 324,
      type: "hotel" as const,
      price: "$289",
    },
    {
      name: "La Terrazza",
      location: "Amalfi Coast, Italy",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      rating: 4.8,
      reviews: 512,
      type: "restaurant" as const,
    
    },
    {
      name: "Temple of the Sun",
      location: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
      rating: 4.9,
      reviews: 1205,
       type: "tourist-spot" as const,
       timing: "6:00 AM - 5:30 PM",
    },
    {
      name: "Seaside Boutique Hotel",
      location: "Dubrovnik, Croatia",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      rating: 4.7,
      reviews: 189,
      type: "hotel" as const,
      price: "$175",
    },
    {
      name: "Sakura Garden",
      location: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
      rating: 4.8,
      reviews: 876,
       type: "tourist-spot" as const,
       timing: "8:00 AM - 5:00 PM",
    },
    {
      name: "Ocean Pearl Restaurant",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
      rating: 4.9,
      reviews: 234,
      type: "restaurant" as const,
  
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Featured
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
              Popular Near You
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Handpicked destinations loved by travelers worldwide
            </p>
          </div>
          <Button variant="outline" className="gap-2 self-start md:self-auto">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
