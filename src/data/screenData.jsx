import { Building, Users, Plane, Coffee, Heart } from "lucide-react";
import mallImg from "../assets/mall_screen.jpg";
import hospital from "../assets/Hospital.jpeg";
import airport from "../assets/perfectFlight.jpeg";
import business from "../assets/business.jpeg";
import apartment from "../assets/luxurary_apartments.jpeg";
import malls from "../assets/malls.jpeg";
export const screensData = [
  {
    title: "Luxury Apartments",
    description: "Premium residential complexes with high-income demographics",
    image: apartment,
    icon: <Building className="h-6 w-6 text-primary" />,
  },
  {
    title: "Shopping Malls",
    description: "High-traffic retail environments with diverse audiences",
    image: malls,
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Airports",
    description: "International travelers and business professionals",
    image: airport,
    icon: <Plane className="h-6 w-6 text-primary" />,
  },
  {
    title: "Corporate Cafeterias",
    description: "Professional workforce during break times",
    image: business,
    icon: <Coffee className="h-6 w-6 text-primary" />,
  },
  {
    title: "Hospitals",
    description: "Healthcare facilities with extended dwell times",
    image: hospital,
    icon: <Heart className="h-6 w-6 text-primary" />,
  },
];
