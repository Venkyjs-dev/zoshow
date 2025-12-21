// import { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { screensData } from "../data/screenData";

// export default function ScreensSection() {
//   {
//     /*const scrollRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-scroll effect
//   useEffect(() => {
//     let raf;
//     const step = () => {
//       if (!isPaused && scrollRef.current) {
//         const el = scrollRef.current;
//         el.scrollLeft += 0.5; // speed: adjust if you want faster/slower        //useEffect and useRef are No need for natural scroll 
//         // reset to start when reaching the end
//         if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
//           el.scrollLeft = 0;
//         }
//       }
//       raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [isPaused]);
// */
//   }
//   return (
//     <section className="relative py-24 px-6 lg:px-12 max-w-[120rem] mx-auto">
//       {/* decorative background images */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <img
//           src="/assets/bg-left.jpg"
//           alt=""
//           className="absolute top-10 left-10 w-64 h-48 object-cover opacity-10 rotate-[-2deg]"
//         />
//         <img
//           src="/assets/bg-right.jpg"
//           alt=""
//           className="absolute bottom-10 right-10 w-64 h-48 object-cover opacity-10 rotate-[1deg]"
//         />
//       </div>

//       {/* heading */}
//       <div className="text-center mb-16 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Planned Screen Locations
//         </h2>
//         <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           Our digital screens will be strategically placed in premium locations
//           across Bangalore and Amaravathi, reaching your target audience where
//           they live, work, and play.
//         </p>
//       </div>

//       {/* scrolling cards */}
//       <div
//         //   ref={scrollRef}
//         // onMouseEnter={() => setIsPaused(true)}
//         // onMouseLeave={() => setIsPaused(false)}
//         className="relative z-10 flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
//       >
//         {screensData.map((item) => (
//           <motion.div
//             key={item.title}
//             whileHover={{ y: -8 }}
//             className="flex-shrink-0 w-80 snap-start group"
//           >
//             <div
//               className="relative overflow-hidden rounded-3xl border border-gray-200
//                          bg-white shadow-md transition-shadow duration-300
//                          group-hover:shadow-2xl group-hover:border-gray-300"
//             >
//               {/* semi-transparent gradient for better text/icon contrast */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 pointer-events-none rounded-3xl" />

//               {/* ribbon */}
//               <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
//                 COMING SOON
//               </div>

//               {/* image with hover zoom */}
//               <div className="relative h-64 overflow-hidden">
//                 <motion.img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500"
//                   whileHover={{ scale: 1.08 }}
//                 />
//                 <motion.div
//                   className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   {item.icon}
//                 </motion.div>
//               </div>

//               {/* content */}
//               <motion.div className="p-6 transition-transform duration-300 group-hover:-translate-y-1">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700 text-sm">{item.description}</p>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Signal, Monitor, Maximize2 } from "lucide-react";
// Ensure you created this file in Step 2. If not, paste the data array here directly.
import { screensData } from "../data/screenData"; 

const ScreenCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex-shrink-0 w-[350px] md:w-[400px] bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 snap-start"
    >
      {/* Image / Feed Area */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        
        {/* "Live" Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-white/80 tracking-widest uppercase">LIVE FEED</span>
        </div>

        {/* Tech Specs Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 text-[10px] font-mono text-cyan-400">
                <span>RES: 4K</span>
                <span>FPS: 60</span>
                <span>ID: ZS-{100 + index}</span>
            </div>
            <Maximize2 className="w-4 h-4 text-white" />
        </div>

        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 relative">
        {/* Decorative Lines */}
        <div className="absolute top-0 left-6 w-8 h-[1px] bg-cyan-500" />
        
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-white mb-1">{data.title}</h3>
                <div className="flex items-center gap-1 text-white/40 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>Bangalore, IN</span>
                </div>
            </div>
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                {data.icon}
            </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-6">
            {data.description}
        </p>

        {/* Status Bar */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <Signal className="w-4 h-4 text-green-500" />
            <span className="text-xs font-medium text-white/70">Network Status: <span className="text-green-400">Optimal</span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default function ScreenSection() {
  const containerRef = useRef(null);

  return (
    <section id="screens" className="py-32 bg-black relative border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-[120rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Locations</span>
                </h2>
                <p className="text-white/50 text-lg max-w-xl">
                    Our screens are strategically positioned in high-dwell zones to maximize engagement.
                </p>
            </div>
            {/* Custom Navigation (Visual Only) */}
            <div className="hidden md:flex gap-2">
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">←</button>
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">→</button>
            </div>
        </div>

        {/* Scroll Container */}
        <div 
            className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
            ref={containerRef}
        >
            {screensData.map((item, idx) => (
                <ScreenCard key={idx} data={item} index={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}