 import { useState, useEffect } from "react";
 import { ArrowLeft, Loader2, MapPin, Clock, Filter } from "lucide-react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import DestinationCard from "@/components/DestinationCard";
 
 interface NearbyPlace {
   name: string;
   location: string;
   rating: number;
   reviews: number;
   price?: string;
   image: string;
   type: "hotel" | "restaurant" | "tourist-spot";
   distance: string;
   timing?: string;
 }
 
 // Mock data for nearby places - in a real app, this would come from Google Places API
 const mockNearbyPlaces: NearbyPlace[] = [
   // Hotels
   {
     name: "City Center Hotel",
     location: "Downtown Area",
     rating: 4.5,
     reviews: 892,
     price: "$150",
     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
     type: "hotel",
     distance: "2.5 km",
   },
   {
     name: "Riverside Inn",
     location: "River District",
     rating: 4.3,
     reviews: 456,
     price: "$120",
     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
     type: "hotel",
     distance: "5.8 km",
   },
   {
     name: "Garden View Resort",
     location: "Green Valley",
     rating: 4.7,
     reviews: 1234,
     price: "$200",
     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
     type: "hotel",
     distance: "12.3 km",
   },
   {
     name: "Heritage Palace Hotel",
     location: "Old Town",
     rating: 4.8,
     reviews: 2100,
     price: "$280",
     image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=300&fit=crop",
     type: "hotel",
     distance: "18.5 km",
   },
   // Restaurants
   {
     name: "Local Flavors Kitchen",
     location: "Food Street",
     rating: 4.6,
     reviews: 678,
     price: "$$",
     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
     type: "restaurant",
     distance: "1.2 km",
   },
   {
     name: "Spice Paradise",
     location: "Market Square",
     rating: 4.4,
     reviews: 345,
     price: "$",
     image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
     type: "restaurant",
     distance: "3.4 km",
   },
   {
     name: "Rooftop Dining",
     location: "Business District",
     rating: 4.8,
     reviews: 1567,
     price: "$$$",
     image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
     type: "restaurant",
     distance: "7.8 km",
   },
   {
     name: "Traditional Eatery",
     location: "Cultural Zone",
     rating: 4.5,
     reviews: 890,
     price: "$$",
     image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
     type: "restaurant",
     distance: "15.2 km",
   },
   // Tourist Spots
   {
     name: "Historic City Museum",
     location: "Heritage Quarter",
     rating: 4.7,
     reviews: 2341,
     price: "$10",
     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
     type: "tourist-spot",
     distance: "4.2 km",
     timing: "9:00 AM - 6:00 PM",
   },
   {
     name: "Sunset Viewpoint",
     location: "Hilltop Area",
     rating: 4.9,
     reviews: 3456,
     image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400&h=300&fit=crop",
     type: "tourist-spot",
     distance: "8.6 km",
     timing: "Open 24 hours",
   },
   {
     name: "Ancient Temple",
     location: "Sacred Grove",
     rating: 4.8,
     reviews: 1890,
     price: "$5",
     image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
     type: "tourist-spot",
     distance: "22.4 km",
     timing: "6:00 AM - 8:00 PM",
   },
   {
     name: "Botanical Gardens",
     location: "Nature Reserve",
     rating: 4.6,
     reviews: 1234,
     price: "$8",
     image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
     type: "tourist-spot",
     distance: "35.7 km",
     timing: "8:00 AM - 5:30 PM",
   },
   {
     name: "National Art Gallery",
     location: "Arts District",
     rating: 4.5,
     reviews: 987,
     price: "$12",
     image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=400&h=300&fit=crop",
     type: "tourist-spot",
     distance: "42.1 km",
     timing: "10:00 AM - 7:00 PM",
   },
   {
     name: "Wildlife Sanctuary",
     location: "Forest Edge",
     rating: 4.7,
     reviews: 2100,
     price: "$15",
     image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
     type: "tourist-spot",
     distance: "48.3 km",
     timing: "7:00 AM - 4:00 PM",
   },
 ];
 
 const NearMe = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
   const [error, setError] = useState<string | null>(null);
   const [activeTab, setActiveTab] = useState("all");
 
   useEffect(() => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           setUserLocation({
             lat: position.coords.latitude,
             lng: position.coords.longitude,
           });
           setIsLoading(false);
         },
         (err) => {
           setError("Unable to get your location. Please enable location services.");
           setIsLoading(false);
         }
       );
     } else {
       setError("Geolocation is not supported by your browser.");
       setIsLoading(false);
     }
   }, []);
 
   const filterPlaces = (type: string) => {
     if (type === "all") return mockNearbyPlaces;
     return mockNearbyPlaces.filter((place) => place.type === type);
   };
 
   const hotels = filterPlaces("hotel");
   const restaurants = filterPlaces("restaurant");
   const touristSpots = filterPlaces("tourist-spot");
 
   if (isLoading) {
     return (
       <div className="min-h-screen bg-background">
         <Navbar />
         <main className="pt-24 pb-16 flex items-center justify-center min-h-[60vh]">
           <div className="text-center">
             <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
             <p className="text-lg text-muted-foreground">Finding places near you...</p>
           </div>
         </main>
         <Footer />
       </div>
     );
   }
 
   if (error) {
     return (
       <div className="min-h-screen bg-background">
         <Navbar />
         <main className="pt-24 pb-16 flex items-center justify-center min-h-[60vh]">
           <div className="text-center max-w-md">
             <MapPin className="w-12 h-12 text-destructive mx-auto mb-4" />
             <h2 className="text-xl font-semibold text-foreground mb-2">Location Access Required</h2>
             <p className="text-muted-foreground mb-6">{error}</p>
             <Link to="/">
               <Button variant="outline" className="gap-2">
                 <ArrowLeft className="w-4 h-4" />
                 Back to Home
               </Button>
             </Link>
           </div>
         </main>
         <Footer />
       </div>
     );
   }
 
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
           <div className="mb-8">
             <div className="flex items-center gap-2 mb-2">
               <MapPin className="w-5 h-5 text-primary" />
               <span className="text-sm text-muted-foreground">
                 Showing places within 50 km radius
               </span>
             </div>
             <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
               Places Near You
             </h1>
             <p className="text-lg text-muted-foreground max-w-2xl">
               Discover hotels, restaurants, and tourist spots in your vicinity. All places shown are within 50 kilometers of your current location.
             </p>
           </div>
 
           {/* Tabs */}
           <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
             <TabsList className="mb-8">
               <TabsTrigger value="all" className="gap-2">
                 All ({mockNearbyPlaces.length})
               </TabsTrigger>
               <TabsTrigger value="hotel" className="gap-2">
                 Hotels ({hotels.length})
               </TabsTrigger>
               <TabsTrigger value="restaurant" className="gap-2">
                 Restaurants ({restaurants.length})
               </TabsTrigger>
               <TabsTrigger value="tourist-spot" className="gap-2">
                 Tourist Spots ({touristSpots.length})
               </TabsTrigger>
             </TabsList>
 
             <TabsContent value="all">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {mockNearbyPlaces.map((place) => (
                   <DestinationCard key={place.name} {...place} />
                 ))}
               </div>
             </TabsContent>
 
             <TabsContent value="hotel">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {hotels.map((place) => (
                   <DestinationCard key={place.name} {...place} />
                 ))}
               </div>
             </TabsContent>
 
             <TabsContent value="restaurant">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {restaurants.map((place) => (
                   <DestinationCard key={place.name} {...place} />
                 ))}
               </div>
             </TabsContent>
 
             <TabsContent value="tourist-spot">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {touristSpots.map((place) => (
                   <DestinationCard key={place.name} {...place} />
                 ))}
               </div>
             </TabsContent>
           </Tabs>
         </div>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default NearMe;