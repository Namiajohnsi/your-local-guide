 import { ArrowLeft } from "lucide-react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import DestinationCard from "@/components/DestinationCard";
 
 const hotels = [
   {
     name: "Grand Palace Resort",
     location: "Bali, Indonesia",
     rating: 4.9,
     reviews: 2341,
     price: "$299/night",
     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    type: "hotel" as const,
   },
   {
     name: "Mountain View Lodge",
     location: "Swiss Alps, Switzerland",
     rating: 4.8,
     reviews: 1892,
     price: "$450/night",
     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    type: "hotel" as const,
   },
   {
     name: "Oceanfront Paradise",
     location: "Maldives",
     rating: 5.0,
     reviews: 3421,
     price: "$599/night",
     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    type: "hotel" as const,
   },
   {
     name: "Urban Luxury Hotel",
     location: "Tokyo, Japan",
     rating: 4.7,
     reviews: 1567,
     price: "$320/night",
     image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=300&fit=crop",
    type: "hotel" as const,
   },
   {
     name: "Desert Oasis Resort",
     location: "Dubai, UAE",
     rating: 4.9,
     reviews: 2890,
     price: "$520/night",
     image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
    type: "hotel" as const,
   },
   {
     name: "Coastal Boutique Inn",
     location: "Santorini, Greece",
     rating: 4.8,
     reviews: 1234,
     price: "$380/night",
     image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop",
    type: "hotel" as const,
   },
 ];
 
 const Hotels = () => {
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
               Luxury Hotels
             </h1>
             <p className="text-lg text-muted-foreground max-w-2xl">
               Discover handpicked luxury accommodations around the world. From beachfront resorts to mountain lodges, find your perfect stay.
             </p>
           </div>
 
           {/* Hotels Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {hotels.map((hotel) => (
               <DestinationCard key={hotel.name} {...hotel} />
             ))}
           </div>
         </div>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Hotels;