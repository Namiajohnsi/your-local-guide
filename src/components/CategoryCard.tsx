import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  count: string;
  href: string;
}

const CategoryCard = ({ title, description, image, count, href }: CategoryCardProps) => {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 block"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm text-accent font-medium">{count}</span>
            <h3 className="text-2xl font-display font-semibold text-primary-foreground mt-1">
              {title}
            </h3>
            <p className="text-sm text-primary-foreground/70 mt-2 max-w-[200px]">
              {description}
            </p>
          </div>
          <div className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm group-hover:bg-gradient-sunset transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;