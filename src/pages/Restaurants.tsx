 import { ArrowLeft } from "lucide-react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import DestinationCard from "@/components/DestinationCard";
 
 const restaurants = [
   {
     name: "Le Petit Bistro",
     location: "Paris, France",
     rating: 4.8,
     reviews: 1523,
   
     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    type: "restaurant" as const,
   },
   {
     name: "Sakura Sushi House",
     location: "Tokyo, Japan",
     rating: 4.9,
     reviews: 2341,

     image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400&h=300&fit=crop",
    type: "restaurant" as const,
   },
   {
     name: "Trattoria Roma",
     location: "Rome, Italy",
     rating: 4.7,
     reviews: 1876,
   
     image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    type: "restaurant" as const,
   },
   {
     name: "The Golden Spoon",
     location: "New York, USA",
     rating: 4.6,
     reviews: 3210,
     
     image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop",
    type: "restaurant" as const,
   },
   {
     name: "Spice Garden",
     location: "Mumbai, India",
     rating: 4.8,
     reviews: 1456,
   
     image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
    type: "restaurant" as const,
   },
   {
     name: "El Toro Loco",
     location: "Barcelona, Spain",
     rating: 4.7,
     reviews: 1890,
  
     image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
    type: "restaurant" as const,
   },
 ];
 
 const Restaurants = () => {
   return (
     <div className="min-h-screen bg-background">
       <Navbar />
       <main className="pt-24 pb-16">
         <div className="container mx-auto px-4">
           {/* Back to Home */}
           <Link to="/">
             <Button variant="ghost" className="mb-6 gap-2">
               <ArrowLeft className="w-4 h-4" />
               Back to Home
             </Button>
           </Link>
 
           {/* Header */}
           <div className="mb-12">
             <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
               Fine Dining
             </h1>
             <p className="text-lg text-muted-foreground max-w-2xl">
               Experience culinary excellence at top-rated restaurants worldwide. From authentic local cuisine to Michelin-starred establishments.
             </p>
           </div>
 
           {/* Restaurants Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {restaurants.map((restaurant) => (
               <DestinationCard key={restaurant.name} {...restaurant} />
             ))}
           </div>
         </div>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Restaurants;
