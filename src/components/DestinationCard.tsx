import { Star, MapPin, Heart } from "lucide-react";
import { useState } from "react";

interface DestinationCardProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  type: "hotel" | "restaurant" | "attraction";
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
}: DestinationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const typeColors = {
    hotel: "bg-ocean",
    restaurant: "bg-sunset",
    attraction: "bg-forest",
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
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-primary-foreground capitalize ${typeColors[type]}`}>
          {type}
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
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;