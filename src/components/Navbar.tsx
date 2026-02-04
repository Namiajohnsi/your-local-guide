import { useState } from "react";
import { MapPin, Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Explore", href: "#explore" },
    { name: "Hotels", href: "#hotels" },
    { name: "Restaurants", href: "#restaurants" },
    { name: "Attractions", href: "#attractions" },
    { name: "Specialties", href: "#specialties" },
  ];

  const handleNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          toast.success("Location found! Showing places near you.");
        },
        () => {
          toast.error("Unable to get your location. Please enable location services.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const handleStartExploring = () => {
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-sunset">
              <Compass className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-semibold text-foreground">
              Wonder Wander
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2" onClick={handleNearMe}>
              <MapPin className="w-4 h-4" />
              Near Me
            </Button>
            <Button size="sm" className="bg-gradient-sunset hover:opacity-90 transition-opacity" onClick={handleStartExploring}>
              Start Exploring
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="gap-2 justify-start" onClick={() => { handleNearMe(); setIsOpen(false); }}>
                  <MapPin className="w-4 h-4" />
                  Near Me
                </Button>
                <Button size="sm" className="bg-gradient-sunset hover:opacity-90 transition-opacity" onClick={() => { handleStartExploring(); setIsOpen(false); }}>
                  Start Exploring
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;