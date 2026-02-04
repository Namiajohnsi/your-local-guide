import { Utensils, Palette, Music, Gift } from "lucide-react";

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: "food" | "art" | "music" | "craft";
  location: string;
  image: string;
}

const SpecialtyCard = ({ title, description, icon, location, image }: SpecialtyCardProps) => {
  const icons = {
    food: Utensils,
    art: Palette,
    music: Music,
    craft: Gift,
  };

  const Icon = icons[icon];

  return (
    <div className="group flex gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 rounded-md bg-gradient-sunset">
            <Icon className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {location}
          </span>
        </div>
        <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SpecialtyCard;