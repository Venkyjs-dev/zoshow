// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Quote, TrendingUp, Star } from "lucide-react";

// // Mock Data with specific Glow Colors added
// const testimonials = [
//   {
//     id: 1,
//     name: "Rajesh Kumar",
//     role: "Marketing Director",
//     company: "RetailOne",
//     quote: "We launched our summer collection exclusively on ZoShow screens. The 4K quality did justice to our creative assets.",
//     metric: "50k Impressions",
//     stats: [30, 50, 45, 80, 60, 90], 
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
//     color: "text-green-500",
//     barColor: "bg-green-500",
//     glow: "rgba(34, 197, 94, 0.6)", // Green Glow
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     role: "Brand Manager",
//     company: "TechFlow",
//     quote: "The ability to target specific demographics in IT corridors made all the difference. We saw an immediate spike in app downloads.",
//     metric: "3x Downloads",
//     stats: [20, 40, 60, 80, 90, 100],
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
//     color: "text-cyan-400",
//     barColor: "bg-cyan-500",
//     glow: "rgba(6, 182, 212, 0.6)", // Cyan Glow
//   },
//   {
//     id: 3,
//     name: "Arun Reddy",
//     role: "Founder",
//     company: "UrbanEats",
//     quote: "ZoShow's analytics dashboard helped us optimize our ad spend in real-time. The footfall attribution is unlike anything else.",
//     metric: "210% ROI",
//     stats: [30, 50, 40, 70, 60, 85],
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
//     color: "text-purple-400",
//     barColor: "bg-purple-500",
//     glow: "rgba(168, 85, 247, 0.6)", // Purple Glow
//   },
//   {
//     id: 4,
//     name: "Sarah Jenkins",
//     role: "VP of Sales",
//     company: "FashionHub",
//     quote: "The most premium DOOH network we have used in Bangalore. The screen quality is unmatched.",
//     metric: "Premium Reach",
//     stats: [50, 40, 70, 60, 80, 75],
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
//     color: "text-blue-400",
//     barColor: "bg-blue-500",
//     glow: "rgba(59, 130, 246, 0.6)", // Blue Glow
//   },
// ];

// export default function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-scroll logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const getVisibleItems = () => {
//     const len = testimonials.length;
//     const prevIndex = (currentIndex - 1 + len) % len;
//     const nextIndex = (currentIndex + 1) % len;
    
//     return [
//       { ...testimonials[prevIndex], position: "left", key: `prev-${testimonials[prevIndex].id}` },
//       { ...testimonials[nextIndex], position: "right", key: `next-${testimonials[nextIndex].id}` },
//       { ...testimonials[currentIndex], position: "center", key: `curr-${testimonials[currentIndex].id}` },
//     ];
//   };

//   const visibleItems = getVisibleItems();

//   const variants = {
//     enter: (position) => ({
//       x: position === "left" ? "-100%" : "100%",
//       scale: 0.8,
//       opacity: 0,
//       filter: "blur(5px)",
//       zIndex: 1,
//     }),
//     center: {
//       x: "0%",
//       scale: 1,
//       opacity: 1,
//       filter: "blur(0px)",
//       zIndex: 10,
//       transition: { duration: 0.8, ease: "circOut" },
//     },
//     left: {
//       x: "-60%", 
//       scale: 0.8,
//       opacity: 0.4,
//       filter: "blur(3px)",
//       zIndex: 5,
//       transition: { duration: 0.8, ease: "circOut" },
//     },
//     right: {
//       x: "60%", 
//       scale: 0.8,
//       opacity: 0.4,
//       filter: "blur(3px)",
//       zIndex: 5,
//       transition: { duration: 0.8, ease: "circOut" },
//     },
//     exit: (position) => ({
//       x: position === "left" ? "-120%" : "120%",
//       scale: 0.7,
//       opacity: 0,
//       filter: "blur(5px)",
//       zIndex: 0,
//       transition: { duration: 0.6, ease: "circIn" },
//     }),
//   };

//   return (
//     <section className="py-20 px-4 bg-[#050505] relative overflow-hidden flex flex-col items-center">
//       {/* Toned down gradients */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
//         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px]" />
//       </div>

//       <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        
//         {/* Compact Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
//             Client <span className="text-green-500">Success</span>
//           </h2>
//           <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto font-paragraph">
//             See the results we deliver for India's fastest-growing brands.
//           </p>
//         </div>

//         {/* 3D Infinite Carousel */}
//         <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center perspective-1000">
//           <AnimatePresence initial={false} mode="popLayout">
//             {visibleItems.map((item) => {
//               const isCenter = item.position === 'center';
              
//               return (
//                 <motion.div
//                   key={item.key}
//                   custom={item.position}
//                   variants={variants}
//                   initial="enter"
//                   animate={item.position}
//                   exit="exit"
//                   className="absolute w-full max-w-2xl px-2 pointer-events-none md:pointer-events-auto"
//                   style={{
//                     pointerEvents: isCenter ? 'auto' : 'none' 
//                   }}
//                 >
//                   {/* --- COMPACT CARD UI --- */}
//                   <div 
//                     className="bg-[#0b0b0b] rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col h-full min-h-[320px] transition-all duration-500"
//                     style={{
//                         // Dynamic Glow Logic
//                         boxShadow: isCenter ? `0 0 50px -10px ${item.glow}` : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
//                         border: isCenter ? `1px solid ${item.glow}` : '1px solid rgba(255,255,255,0.1)'
//                     }}
//                   >
                    
//                     {/* Smaller Quote Icon */}
//                     <Quote className="w-10 h-10 text-[#1a1a1a] mb-6 fill-current" />

//                     {/* Smaller Quote Text */}
//                     <h3 className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-auto font-paragraph">
//                       "{item.quote}"
//                     </h3>

//                     <div className="h-px w-full bg-white/5 my-6" />

//                     <div className="flex flex-col sm:flex-row items-end justify-between gap-6">
                      
//                       {/* Compact Profile Section */}
//                       <div className="flex items-center gap-4">
//                         <div className="relative">
//                           <div className="absolute inset-0 bg-white/10 rounded-full blur-sm" />
//                           <img 
//                             src={item.image} 
//                             alt={item.name} 
//                             className="relative w-12 h-12 rounded-full border border-white/10 object-cover" 
//                           />
//                         </div>
//                         <div>
//                           <div className="text-white font-bold text-lg font-heading">{item.name}</div>
//                           <div className="flex items-center gap-1 mt-0.5">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Compact Result Box */}
//                       <div className="bg-[#121212] rounded-xl p-4 border border-white/10 w-full sm:w-auto min-w-[200px]">
//                         <div className="flex items-center gap-2 mb-1.5 text-white/40 text-[10px] font-bold uppercase tracking-widest font-heading">
//                           <TrendingUp className={`w-3 h-3 ${item.color}`} />
//                           Result
//                         </div>
                        
//                         <div className="text-2xl font-bold text-white mb-3 font-heading">
//                           {item.metric}
//                         </div>
                        
//                         {/* Mini Bar Chart */}
//                         <div className="flex items-end gap-1 h-6">
//                           {item.stats.map((h, i) => (
//                             <div
//                               key={i}
//                               className={`flex-1 rounded-[1px] ${item.barColor} opacity-90`}
//                               style={{ height: `${h}%` }}
//                             />
//                           ))}
//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* Indicators */}
//         <div className="flex gap-2 mt-8">
//             {testimonials.map((_, idx) => (
//                 <button 
//                     key={idx}
//                     onClick={() => setCurrentIndex(idx)}
//                     className={`h-1 rounded-full transition-all duration-300 ${
//                         idx === currentIndex ? "w-6 bg-green-500" : "w-1.5 bg-white/20 hover:bg-white/40"
//                     }`}
//                 />
//             ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, TrendingUp, Star } from "lucide-react";

import zapzing from "../assets/zapzing.jpeg";
// import teluguAromas from "../assets/teluguAromas.jpeg";
// import bawarchiBiriyani from "../assets/bawarchiBiriyani.jpeg";

import zapzingLogo from "../assets/zapzingLogo.jpeg";
import teluguAromasLogo from "../assets/teluguAromasLogo.jpg";
import bawarchiBiriyaniLogo from "../assets/bawarchiBiriyaniLogo.jpg";

// Mock Data
const testimonials = [

  {
    id: 1,
    name: "Manoj",
    role: "Owner",
    company: "ZapZing",
    logo: zapzingLogo, // Ensure this variable is imported
    quote: "Visual appeal is everything in the food business. Displaying our sizzling combos and summer coolers on ZoShow's high-def screens in residential lobbies created an instant craving among residents.",
    metric: "30% Order Hike",
    stats: [30, 50, 45, 80, 60, 90], 
    image: zapzing, // Ensure this variable is imported
    color: "text-purple-400",
    barColor: "bg-purple-500",
    glow: "rgba(168, 85, 247, 0.6)",
  },
  {
    id: 2,
    name: "Vineeth",
    role: "Owner",
    company: "Telugu Aromas",
    logo: teluguAromasLogo, // Ensure this variable is imported
    quote: "We needed to reach people craving authentic home-style flavors. Targeting specific IT corridors and high-end societies helped us fill tables during lunch hours and weekends.",
    metric: "50k Impressions",
    stats: [20, 40, 60, 80, 90, 100],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    color: "text-green-500",
    barColor: "bg-green-500",
    glow: "rgba(34, 197, 94, 0.6)",
  },
  {
    id: 3,
    name: "Vamsi",
    role: "Owner",
    company: "Bawarchi Biriyani",
    logo: bawarchiBiriyaniLogo, 
    quote: "Timing is key for Biryani. ZoShow allowed us to push our 'Family Pack' offers exactly during evening peak hours, resulting in a direct spike in dinner delivery orders that we could track.",
    metric: "High ROI",
    stats: [30, 50, 40, 70, 60, 85],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    color: "text-cyan-400",
    barColor: "bg-cyan-500",
    glow: "rgba(6, 182, 212, 0.6)",
  },

  // {
  //   id: 1,
  //   name: "Manoj",
  //   role: "Owner",
  //   company: "ZapZing",
  //   logo: zapzingLogo,
  //   quote: "We launched our summer collection exclusively on ZoShow screens. The 4K quality did justice to our creative assets.",
  //   metric: "50k Impressions",
  //   stats: [30, 50, 45, 80, 60, 90], 
  //   image: zapzing,
  //   color: "text-purple-400",
  //   barColor: "bg-purple-500",
  //   glow: "rgba(168, 85, 247, 0.6)",
    
  // },
  // {
  //   id: 2,
  //   name: "Vineeth",
  //   role: "Owner",
  //   company: "Telugu Aromas",
  //   logo: teluguAromasLogo,
  //   quote: "The ability to target specific demographics in IT corridors made all the difference. We saw an immediate spike in app downloads.",
  //   metric: "100% ROI",
  //   stats: [20, 40, 60, 80, 90, 100],
  //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  //   color: "text-green-500",
  //   barColor: "bg-green-500",
  //   glow: "rgba(34, 197, 94, 0.6)",
    
  // },
  // {
  //   id: 3,
  //   name: "Vamsi",
  //   role: "Owner",
  //   company: "Bawarchi Biriyani",
  //   logo: "https://ui-avatars.com/api/?name=Urban+Eats&background=a855f7&color=fff&size=64&bold=true",
  //   quote: "ZoShow's analytics dashboard helped us optimize our ad spend in real-time. The footfall attribution is unlike anything else.",
  //   metric: "Premium Reach",
  //   stats: [30, 50, 40, 70, 60, 85],
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  //   color: "text-cyan-400",
  //   barColor: "bg-cyan-500",
  //   glow: "rgba(6, 182, 212, 0.6)",
  // },
  // {
  //   id: 4,
  //   name: "Sarah Jenkins",
  //   role: "VP of Sales",
  //   company: "FashionHub",
  //   logo: "https://ui-avatars.com/api/?name=Fashion+Hub&background=3b82f6&color=fff&size=64&bold=true",
  //   quote: "The most premium DOOH network we have used in Bangalore. The screen quality is unmatched.",
  //   metric: "Premium Reach",
  //   stats: [50, 40, 70, 60, 80, 75],
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  //   color: "text-blue-400",
  //   barColor: "bg-blue-500",
  //   glow: "rgba(59, 130, 246, 0.6)",
  // },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleItems = () => {
    const len = testimonials.length;
    const prevIndex = (currentIndex - 1 + len) % len;
    const nextIndex = (currentIndex + 1) % len;
    
    return [
      { ...testimonials[prevIndex], position: "left", key: `prev-${testimonials[prevIndex].id}` },
      { ...testimonials[nextIndex], position: "right", key: `next-${testimonials[nextIndex].id}` },
      { ...testimonials[currentIndex], position: "center", key: `curr-${testimonials[currentIndex].id}` },
    ];
  };

  const visibleItems = getVisibleItems();

  const variants = {
    enter: (position) => ({
      x: position === "left" ? "-100%" : "100%",
      scale: 0.8,
      opacity: 0,
      filter: "blur(5px)",
      zIndex: 1,
    }),
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10,
      transition: { duration: 0.8, ease: "circOut" },
    },
    left: {
      x: "-60%", 
      scale: 0.8,
      opacity: 0.4,
      filter: "blur(3px)",
      zIndex: 5,
      transition: { duration: 0.8, ease: "circOut" },
    },
    right: {
      x: "60%", 
      scale: 0.8,
      opacity: 0.4,
      filter: "blur(3px)",
      zIndex: 5,
      transition: { duration: 0.8, ease: "circOut" },
    },
    exit: (position) => ({
      x: position === "left" ? "-120%" : "120%",
      scale: 0.7,
      opacity: 0,
      filter: "blur(5px)",
      zIndex: 0,
      transition: { duration: 0.6, ease: "circIn" },
    }),
  };

  return (
    <section className="py-20 px-4 bg-[#050505] relative overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
            Client <span className="text-green-500">Success</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto font-paragraph">
            See the results we deliver for India's fastest-growing brands.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleItems.map((item) => {
              const isCenter = item.position === 'center';
              
              return (
                <motion.div
                  key={item.key}
                  custom={item.position}
                  variants={variants}
                  initial="enter"
                  animate={item.position}
                  exit="exit"
                  className="absolute w-full max-w-2xl px-2 pointer-events-none md:pointer-events-auto"
                  style={{
                    pointerEvents: isCenter ? 'auto' : 'none' 
                  }}
                >
                  {/* --- CARD --- */}
                  <div 
                    className="bg-[#0b0b0b] rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col h-full min-h-[320px] transition-all duration-500"
                    style={{
                        boxShadow: isCenter ? `0 0 50px -10px ${item.glow}` : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        border: isCenter ? `1px solid ${item.glow}` : '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    
                    {/* --- TOP HEADER: Quote & Company Branding Together on Left --- */}
                    <div className="flex items-center gap-4 mb-6">
                        {/* Quote Icon */}
                        <Quote className="w-10 h-10 text-[#1a1a1a] fill-current" />
                        
                        {/* Vertical Separator Line */}
                        <div className="h-8 w-px bg-white/10" />

                        {/* Company Badge */}
                        <div className="flex items-center gap-3">
                             <img 
                                src={item.logo} 
                                alt={item.company} 
                                className="w-8 h-8 rounded-full border border-white/20 object-cover grayscale-0" 
                             />
                             <span className="text-sm font-bold text-white/70 uppercase tracking-widest font-heading">
                                {item.company}
                             </span>
                        </div>
                    </div>

                    {/* Quote Text */}
                    <h3 className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-auto font-paragraph">
                      "{item.quote}"
                    </h3>

                    <div className="h-px w-full bg-white/5 my-6" />

                    <div className="flex flex-col sm:flex-row items-end justify-between gap-6">
                      
                      {/* Profile Section */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/10 rounded-full blur-sm" />
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="relative w-12 h-12 rounded-full border border-white/10 object-cover" 
                          />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg font-heading">{item.name}</div>
                          <div className="flex items-center gap-1 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Result Box */}
                      <div className="bg-[#121212] rounded-xl p-4 border border-white/10 w-full sm:w-auto min-w-[200px]">
                        <div className="flex items-center gap-2 mb-1.5 text-white/40 text-[10px] font-bold uppercase tracking-widest font-heading">
                          <TrendingUp className={`w-3 h-3 ${item.color}`} />
                          Result
                        </div>
                        
                        <div className="text-2xl font-bold text-white mb-3 font-heading">
                          {item.metric}
                        </div>
                        
                        {/* Mini Bar Chart */}
                        <div className="flex items-end gap-1 h-6">
                          {item.stats.map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-[1px] ${item.barColor} opacity-90`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-8">
            {testimonials.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-green-500" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}