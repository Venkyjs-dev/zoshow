import { Building, Users, Plane, Coffee, Heart } from "lucide-react";
import mallImg from "../assets/mall_screen.jpg";

export const screensData = [
  {
    title: "Luxury Apartments",
    description: "Premium residential complexes with high-income demographics",
    image: mallImg,
    icon: <Building className="h-6 w-6 text-primary" />,
  },
  {
    title: "Shopping Malls",
    description: "High-traffic retail environments with diverse audiences",
    image: mallImg,
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Airports",
    description: "International travelers and business professionals",
    image: mallImg,
    icon: <Plane className="h-6 w-6 text-primary" />,
  },
  {
    title: "Corporate Cafeterias",
    description: "Professional workforce during break times",
    image: mallImg,
    icon: <Coffee className="h-6 w-6 text-primary" />,
  },
  {
    title: "Hospitals",
    description: "Healthcare facilities with extended dwell times",
    image: mallImg,
    icon: <Heart className="h-6 w-6 text-primary" />,
  },
];
