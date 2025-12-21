// // import {
// //   Monitor,
// //   Calendar,
// //   ArrowRight,
// //   Play,
// //   Shield,
// //   Award,
// //   Timer,
// // } from "lucide-react";

// // export default function BannerSection({ id }) {
// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0f1e] via-slate-900 to-blue-900 text-white overflow-hidden py-16 pt-24"
// //     >
// //       {/* blurred background blobs */}
// //       <div className="absolute inset-0">
// //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
// //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
// //       </div>

// //       {/* main content */}
// //       <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
// //         {/* small badge */}
// //         <div className="mb-8">
// //           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
// //             <Monitor className="h-5 w-5 text-cyan-300" />
// //             <span className="text-sm font-medium">
// //               Digital Out-of-Home Platform
// //             </span>
// //           </div>
// //         </div>

// //         {/* heading */}
// //         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
// //           Digital Out-of-Home{" "}
// //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
// //             Advertising
// //           </span>{" "}
// //           Platform
// //         </h1>

// //         {/* description */}
// //         <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
// //           Transform your advertising strategy with our innovative digital
// //           out-of-home platform. We're building a network of strategically placed
// //           digital screens in Bangalore and Amaravathi to deliver targeted
// //           advertising solutions with comprehensive analytics.
// //         </p>

// //         {/* CTA buttons */}
// //         {/*Note: Temporarly commented */}
// //         {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
// //           <button

// //             className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 font-semibold px-10 py-5 rounded-lg text-lg shadow-lg transition-colors"
// //           >
// //             <Calendar className="h-5 w-5" />
// //             Schedule Demo
// //             <ArrowRight className="h-5 w-5" />
// //           </button>

// //           <button

// //             className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-10 py-5 rounded-lg text-lg backdrop-blur-sm transition-colors"
// //           >
// //             <Play className="h-5 w-5" />
// //             View Platform
// //           </button>
// //         </div> */}

// //         {/* highlights */}
// //         <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
// //           <div className="flex items-center gap-2">
// //             <Shield className="h-5 w-5 text-green-400" />
// //             <span className="text-sm">Secure Platform</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <Award className="h-5 w-5 text-blue-400" />
// //             <span className="text-sm">Premium Locations Planned</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <Timer className="h-5 w-5 text-cyan-400" />
// //             <span className="text-sm">Future Analytics</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* decorative bottom image */}
// //       <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
// //         <img
// //           src="https://static.wixstatic.com/media/3fcaa5_067c1462de91414f8d2e72c909e09626~mv2.jpg"
// //           alt="ZoShow digital advertising display in premium location"
// //           className="w-full h-full object-cover rounded-tl-2xl"
// //         />
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight, Play, Sparkles } from "lucide-react";

// export default function BannerSection() {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Mouse tracking logic for the spotlight effect
//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
//     const { left, top } = containerRef.current.getBoundingClientRect();
//     setMousePosition({ x: e.clientX - left, y: e.clientY - top });
//   };

//   // Parallax scroll effect for the text
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 500], [0, 200]);
//   const y2 = useTransform(scrollY, [0, 500], [0, -150]);

//   return (
//     <section
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       id="home"
//       className="relative min-h-[110vh] flex flex-col justify-center items-center bg-[#050505] text-white overflow-hidden"
//     >
//       {/* --- 1. Dynamic Background Grid --- */}
//       <div className="absolute inset-0 z-0 opacity-20">
//         <div
//           className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
//         />
//         {/* The Mouse Spotlight */}
//         <div
//           className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//           style={{
//             background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
//           }}
//         />
//       </div>

//       {/* --- 2. Ambient Glow Blobs --- */}
//       <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
//       <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />

//       {/* --- 3. Main Content --- */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

//         {/* Floating Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 hover:border-cyan-500/50 transition-colors cursor-pointer"
//         >
//           <Sparkles className="w-4 h-4 text-cyan-400" />
//           <span className="text-sm font-medium bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
//             Introducing ZoShow Intelligence 2.0
//           </span>
//         </motion.div>

//         {/* Massive Headline with Parallax */}
//         <motion.h1
//           style={{ y: y1 }}
//           className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]"
//         >
//           <span className="block text-white">Dominating</span>
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300">
//             Attention.
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           style={{ y: y1 }}
//           className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed"
//         >
//           The world's first AI-powered Digital Out-of-Home network designed
//           for <span className="text-white font-semibold">hyper-local targeting</span> and real-time analytics.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           style={{ y: y1 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-6"
//         >
//           <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-transform hover:scale-105">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
//             <span className="relative flex items-center gap-2">
//               Start Campaign <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//           </button>

//           <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 hover:border-white transition-all text-white/90">
//             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
//               <Play className="w-3 h-3 fill-white" />
//             </div>
//             <span className="font-medium">Watch Showreel</span>
//           </button>
//         </motion.div>
//       </div>

//       {/* --- 4. 3D Floating Elements (Decorative) --- */}
//       <motion.div
//         style={{ y: y2, rotate: -12 }}
//         className="absolute top-[15%] right-[5%] w-64 h-40 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md rounded-2xl p-4 hidden lg:block"
//       >
//         <div className="flex gap-2 mb-2">
//            <div className="w-3 h-3 rounded-full bg-red-500/20" />
//            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
//            <div className="w-3 h-3 rounded-full bg-green-500/20" />
//         </div>
//         <div className="space-y-2">
//           <div className="h-2 w-3/4 bg-white/20 rounded animate-pulse" />
//           <div className="h-2 w-1/2 bg-white/10 rounded" />
//         </div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
//       >
//         <span className="text-xs uppercase tracking-widest">Scroll</span>
//         <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
//       </motion.div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  BarChart3,
  Wifi,
  MapPin,
  Zap,
  Globe,
  Layers,
  Sparkles,
  Activity,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- Configuration ---

const spaceObjects = [
  // --- ICONS (The Data Layer) ---
  {
    type: "icon",
    Icon: Wifi,
    top: "15%",
    left: "10%",
    scale: 1.2,
    delay: 0,
    parallax: 200,
  },
  {
    type: "icon",
    Icon: MapPin,
    top: "25%",
    left: "85%",
    scale: 1.5,
    delay: 1.5,
    parallax: 300,
  },
  {
    type: "icon",
    Icon: Zap,
    top: "60%",
    left: "5%",
    scale: 1.0,
    delay: 3,
    parallax: 150,
  },
  {
    type: "icon",
    Icon: BarChart3,
    top: "75%",
    left: "90%",
    scale: 1.3,
    delay: 0.5,
    parallax: 350,
  },
  {
    type: "icon",
    Icon: Globe,
    top: "10%",
    left: "60%",
    scale: 0.8,
    delay: 4,
    parallax: 100,
  },
  {
    type: "icon",
    Icon: Layers,
    top: "85%",
    left: "20%",
    scale: 1.1,
    delay: 2,
    parallax: 250,
  },
  {
    type: "icon",
    Icon: Activity,
    top: "45%",
    left: "92%",
    scale: 0.9,
    delay: 1,
    parallax: 180,
  },
  {
    type: "icon",
    Icon: Search,
    top: "50%",
    left: "8%",
    scale: 0.8,
    delay: 2.5,
    parallax: 120,
  },

  // --- PORTRAIT BILLBOARDS ---
  {
    type: "billboard",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80",
    top: "20%",
    left: "22%",
    scale: 1.1,
    delay: 1,
    parallax: 220,
  },
  {
    type: "billboard",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=300&q=80",
    top: "65%",
    left: "78%",
    scale: 1.3,
    delay: 3,
    parallax: 320,
  },
  {
    type: "billboard",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
    top: "75%",
    left: "35%",
    scale: 0.9,
    delay: 0,
    parallax: 160,
  },
  {
    type: "billboard",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80",
    top: "32%",
    left: "6%",
    scale: 1.0,
    delay: 2,
    parallax: 190,
  },
];

// --- Sub-Components ---

// 1. Floating Object (Icon or Billboard)
const FloatingElement = ({ item, scrollY }) => {
  const yParallax = useTransform(scrollY, [0, 1000], [0, item.parallax]);

  const driftVariants = {
    animate: {
      y: [0, -20, 0, 15, 0],
      x: [0, 15, 0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 8 + Math.random() * 4,
        ease: "easeInOut",
        repeat: Infinity,
        delay: item.delay,
      },
    },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        scale: item.scale,
        y: yParallax,
      }}
      className="pointer-events-none z-10"
    >
      <motion.div variants={driftVariants} animate="animate">
        {item.type === "icon" ? (
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-lg opacity-40">
            <item.Icon className="w-8 h-8 text-white/50" />
          </div>
        ) : (
          <div className="w-32 h-56 rounded-xl border-[3px] border-[#1a1a1a] bg-[#0a0a0a] relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
            <img
              src={item.image}
              alt="Digital Billboard"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.style.backgroundColor = "#111";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.05)_50%)] bg-[size:100%_3px] pointer-events-none opacity-50" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// 2. Star Field Component (Now Moving!)
const StarField = () => {
  // Generate 75 stars
  const stars = Array.from({ length: 75 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() > 0.6 ? "w-0.5 h-0.5" : "w-1 h-1",
    opacityDuration: 3 + Math.random() * 4, // Twinkle speed
    moveDuration: 20 + Math.random() * 20, // Move speed (slow)
    driftY: Math.random() > 0.5 ? -100 : 100, // Some go up, some go down
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.size}`}
          style={{ top: star.top, left: star.left }}
          // Two concurrent animations:
          animate={{
            opacity: [0.2, 0.8, 0.2], // 1. Twinkle
            y: [0, star.driftY], // 2. Move vertically
          }}
          transition={{
            opacity: {
              duration: star.opacityDuration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: star.moveDuration,
              repeat: Infinity,
              ease: "linear", // Constant speed movement
            },
          }}
        />
      ))}
    </div>
  );
};

export default function BannerSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const windowY = useTransform(scrollY, [0, 1000], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* 1. DEEP SPACE ATMOSPHERE (Background) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />

        {/* MOVING Star Field */}
        <StarField />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      </div>

      {/* 2. THE FLOATING OBJECTS (Icons + Billboards) */}
      {spaceObjects.map((item, index) => (
        <FloatingElement key={index} item={item} scrollY={scrollY} />
      ))}

      {/* 3. THE "WINDOW TAB" (Top Right) */}
      <motion.div
        style={{ y: windowY }}
        initial={{ opacity: 0, rotate: 12, x: 100 }}
        animate={{ opacity: 1, rotate: 12, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[18%] right-[8%] w-64 h-40 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-xl backdrop-blur-md z-0 hidden lg:flex flex-col p-4 shadow-2xl pointer-events-none"
      >
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="space-y-3 opacity-50">
          <div className="w-3/4 h-2 bg-white/20 rounded-full" />
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-24 bg-gradient-to-r from-blue-500/20 to-transparent rounded mt-2" />
        </div>
      </motion.div>

      {/* 4. FOREGROUND UI */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Intro Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111] mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span className="text-xs font-medium text-white/70">
            Introducing ZoShow Intelligence 2.0
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-[0.9] drop-shadow-2xl"
        >
          Dominating <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Attention.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg"
        >
          The world's first AI-powered Digital Out-of-Home network designed for{" "}
          <br className="hidden md:block" />
          <span className="text-white font-medium">
            hyper-local targeting
          </span>{" "}
          and real-time analytics.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Start Campaign <ArrowRight className="w-5 h-5" />
            </button> */}

          <Link
            to="/inventory"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Start Campaign <ArrowRight className="w-5 h-5" />
          </Link>

          <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-white" />
            </div>
            Watch Showreel
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 text-[10px] text-white/20 font-mono uppercase tracking-[0.2em] animate-pulse"
      >
        Scroll
      </motion.div>
    </section>
  );
}
