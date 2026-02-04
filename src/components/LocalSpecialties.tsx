import SpecialtyCard from "./SpecialtyCard";
import { Sparkles } from "lucide-react";

const LocalSpecialties = () => {
  const specialties = [
    {
      title: "Moussaka",
      description: "Traditional Greek layered dish with eggplant, minced meat, and creamy béchamel sauce",
      icon: "food" as const,
      location: "Greece",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400",
    },
    {
      title: "Venetian Glass Art",
      description: "Centuries-old glassmaking tradition producing stunning decorative pieces",
      icon: "art" as const,
      location: "Italy",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
    },
    {
      title: "Fado Music",
      description: "Soulful Portuguese folk music expressing longing and nostalgia",
      icon: "music" as const,
      location: "Portugal",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    },
    {
      title: "Moroccan Rugs",
      description: "Handwoven Berber carpets with traditional geometric patterns",
      icon: "craft" as const,
      location: "Morocco",
      image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=400",
    },
    {
      title: "Sushi Omakase",
      description: "Chef's choice multi-course sushi experience with seasonal fish",
      icon: "food" as const,
      location: "Japan",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
    },
    {
      title: "Flamenco Dance",
      description: "Passionate Spanish art form combining dance, singing, and guitar",
      icon: "music" as const,
      location: "Spain",
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400",
    },
  ];

  return (
    <section id="specialties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Local Experiences
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Taste the
            <span className="text-gradient-sunset"> Local Culture</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Immerse yourself in authentic traditions, flavors, and crafts 
            that make each destination unique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <SpecialtyCard {...specialty} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSpecialties;