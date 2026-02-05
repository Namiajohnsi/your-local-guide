import { useState, useEffect } from "react";
import { Search, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import heroImage from "@/assets/hero-destination.jpg";
import hotelsImage from "@/assets/category-hotels.jpg";
import restaurantsImage from "@/assets/category-restaurants.jpg";
import attractionsImage from "@/assets/category-attractions.jpg";

const heroSlides = [
  {
    image: heroImage,
    title: "Hidden Gems",
    subtitle: "Discover the World's",
  },
  {
    image: hotelsImage,
    title: "Luxury Stays",
    subtitle: "Experience the Best",
  },
  {
    image: restaurantsImage,
    title: "Local Cuisines",
    subtitle: "Taste Authentic",
  },
  {
    image: attractionsImage,
    title: "Amazing Places",
    subtitle: "Explore Stunning",
  },
];

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleExplore = () => {
    if (destination.trim()) {
      toast.success(`Searching for amazing places in ${destination}...`);
      document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
    } else {
      toast.error("Please enter a destination to explore.");
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`${slide.subtitle} ${slide.title}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Your Personal Tour Guide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {heroSlides[currentSlide].subtitle}
            <span className="block text-gradient-sunset mt-2">{heroSlides[currentSlide].title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Find the best hotels, restaurants, and attractions near you. 
            Experience local specialties like a true traveler.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter your destination..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleExplore()}
                className="pl-12 h-14 bg-card/95 backdrop-blur-sm border-0 text-foreground placeholder:text-muted-foreground rounded-xl shadow-elevated"
              />
            </div>
            <Button size="lg" className="h-14 px-8 bg-gradient-sunset hover:opacity-90 transition-opacity rounded-xl shadow-elevated" onClick={handleExplore}>
              <Search className="w-5 h-5 mr-2" />
              Explore
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10K+", label: "Destinations" },
              { value: "50K+", label: "Hotels" },
              { value: "100K+", label: "Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-foreground w-6"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;