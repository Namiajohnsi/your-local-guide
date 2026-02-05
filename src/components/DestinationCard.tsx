 import { Star, MapPin, Heart, Navigation, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
   type: "hotel" | "restaurant" | "tourist-spot";
   distance?: string;
   timing?: string;
  price?: string;
}

const DestinationCard = ({
  name,
  location,
  image,
  rating,
  reviews,
  type,
   price,
   distance,
   timing,
}: DestinationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

 const typeColors = {
   hotel: "bg-ocean",
   restaurant: "bg-sunset",
   "tourist-spot": "bg-forest",
 };
 
 const typeLabels = {
   hotel: "Hotel",
   restaurant: "Restaurant",
   "tourist-spot": "Tourist Spot",
 };

  const handleGetDirections = () => {
    const encodedLocation = encodeURIComponent(`${name}, ${location}`);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`, '_blank');
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Type Badge */}
         <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-primary-foreground ${typeColors[type]}`}>
           {typeLabels[type]}
         </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "fill-sunset text-sunset" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Price Tag */}
        {price && (
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm">
            <span className="text-sm font-semibold text-foreground">{price}</span>
            {type === "hotel" && <span className="text-xs text-muted-foreground">/night</span>}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 mt-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
           {distance && (
             <span className="text-sm ml-2 text-primary font-medium">• {distance}</span>
           )}
        </div>

         {/* Timing for Tourist Spots */}
         {timing && (
           <div className="flex items-center gap-1 mt-2 text-muted-foreground">
             <Clock className="w-4 h-4" />
             <span className="text-sm">{timing}</span>
           </div>
         )}
 
        {/* Directions Button */}
        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full gap-2"
          onClick={handleGetDirections}
        >
          <Navigation className="w-4 h-4" />
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;