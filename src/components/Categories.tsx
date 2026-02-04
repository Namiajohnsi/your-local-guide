import CategoryCard from "./CategoryCard";
import hotelsImage from "@/assets/category-hotels.jpg";
import restaurantsImage from "@/assets/category-restaurants.jpg";
import attractionsImage from "@/assets/category-attractions.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Hotels",
      description: "From boutique stays to luxury resorts",
      image: hotelsImage,
      count: "15,000+ places",
      href: "#hotels",
    },
    {
      title: "Restaurants",
      description: "Authentic local cuisines and fine dining",
      image: restaurantsImage,
      count: "25,000+ venues",
      href: "#restaurants",
    },
    {
      title: "Attractions",
      description: "Landmarks, nature, and hidden wonders",
      image: attractionsImage,
      count: "10,000+ spots",
      href: "#attractions",
    },
  ];

  return (
    <section id="explore" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Explore
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            What Would You Like
            <span className="text-gradient-sunset"> to Discover?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you're looking for a cozy place to stay, delicious local food, 
            or breathtaking sights—we've got you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;