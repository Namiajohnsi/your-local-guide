import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import LocalSpecialties from "@/components/LocalSpecialties";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedDestinations />
      <LocalSpecialties />
      <Footer />
    </div>
  );
};

export default Index;