 import { ArrowLeft, Clock } from "lucide-react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import DestinationCard from "@/components/DestinationCard";
 
 const attractions = [
   {
     name: "Eiffel Tower",
     location: "Paris, France",
     rating: 4.9,
     reviews: 45231,
  
     image: "Eiffeltower.png",
     type: "tourist-spot" as const,
     timing: "9:30 AM - 11:45 PM",
   },
   {
     name: "Machu Picchu",
     location: "Cusco, Peru",
     rating: 4.9,
     reviews: 32145,
     
     image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
     type: "tourist-spot" as const,
     timing: "6:00 AM - 5:30 PM",
   },
   {
     name: "Great Wall of China",
     location: "Beijing, China",
     rating: 4.8
     reviews: 28976,
     
     image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop",
     type: "tourist-spot" as const,
     timing: "7:30 AM - 5:30 PM",
   },
   {
     name: "Colosseum",
     location: "Rome, Italy",
     rating: 4.8,
     reviews: 38542,
   
     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
     type: "tourist-spot" as const,
     timing: "8:30 AM - 7:00 PM",
   },
   {
     name: "Taj Mahal",
     location: "Agra, India",
     rating: 4.9,
     reviews: 41234,
     price: "₹1100",
     image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
     type: "tourist-spot" as const,
     timing: "6:00 AM - 6:30 PM",
   },
   {
     name: "Grand Canyon",
     location: "Arizona, USA",
     rating: 4.9,
     reviews: 25678,
   
     image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400&h=300&fit=crop",
     type: "tourist-spot" as const,
     timing: "Open 24 hours",
   },
 ];
 
 const TouristSpots = () => {
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
                 Must-See Tourist Spots
             </h1>
             <p className="text-lg text-muted-foreground max-w-2xl">
               Explore iconic landmarks and breathtaking natural wonders. These destinations will leave you with unforgettable memories.
             </p>
           </div>
 
           {/* Attractions Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {attractions.map((attraction) => (
               <DestinationCard key={attraction.name} {...attraction} />
             ))}
           </div>
         </div>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default TouristSpots;
