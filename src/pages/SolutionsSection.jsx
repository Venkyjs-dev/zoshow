// import { useRef, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { screensData } from "../data/screenData";

// export default function ScreensSection() {
//   const scrollRef = useRef(null);
//   const controls = useAnimation();

//   // Auto-scroll logic (horizontal carousel)
//   useEffect(() => {
//     let raf;
//     const scroll = () => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollLeft += 0.5; // slow continuous move
//       }
//       raf = requestAnimationFrame(scroll);
//     };
//     scroll();
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   const pauseScroll = () => cancelAnimationFrame(scrollRef.current?._raf);

//   return (
//     <section className="relative py-24 px-6 lg:px-12 max-w-[120rem] mx-auto">
//       {/* Decorative background for subtle texture */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

//       {/* Heading */}
//       <div className="text-center mb-16 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Planned Screen Locations
//         </h2>
//         <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           Our digital screens will be strategically placed in premium locations
//           across Bangalore and Amaravathi, reaching your audience where they
//           live, work, and play.
//         </p>
//       </div>

//       {/* Carousel container */}
//       <div
//         ref={scrollRef}
//         onMouseEnter={pauseScroll}
//         onMouseLeave={() => {
//           // resume on leave
//           const resume = () => {
//             if (scrollRef.current) {
//               scrollRef.current.scrollLeft += 0.5;
//               scrollRef.current._raf = requestAnimationFrame(resume);
//             }
//           };
//           scrollRef.current._raf = requestAnimationFrame(resume);
//         }}
//         className="
//           relative z-10 flex gap-8 overflow-x-auto pb-6
//           scrollbar-hide snap-x snap-mandatory
//         ">
//         {screensData.map((item, idx) => (
//           <motion.div
//             key={item.title}
//             whileHover={{
//               y: -8,
//               scale: 1.02,
//               boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: idx * 0.1 }}
//             className="
//               flex-shrink-0 w-80 snap-start
//             ">
//             <div
//               className="
//                 relative rounded-3xl overflow-hidden
//                 bg-slate-900 text-white
//                 border border-slate-700
//                 shadow-lg
//                 hover:border-cyan-400 hover:shadow-cyan-500/40
//                 transition-all duration-300
//               ">
//               {/* Dim overlay for image readability */}
//               <div className="absolute inset-0 bg-black/30" />

//               {/* Tag */}
//               <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
//                 COMING SOON
//               </div>

//               {/* Image */}
//               <div className="relative h-48">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
//                   {item.icon}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative p-6 z-10">
//                 <h3 className="text-xl font-semibold mb-2 tracking-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-300 text-sm">{item.description}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, BrainCircuit, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "The Hardware",
    subtitle: "Premium 4K Displays",
    icon: Monitor,
    desc: "High-brightness, weather-resistant digital totems designed for 24/7 operation in high-traffic zones.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "The Software",
    subtitle: "Programmatic Ad Manager",
    icon: Smartphone,
    desc: "A cloud-based command center allowing you to upload, schedule, and track campaigns from your phone.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "The Intelligence",
    subtitle: "Audience AI",
    icon: BrainCircuit,
    desc: "Computer vision algorithms that analyze footfall and demographics to ensure your ad reaches the right people.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Ecosystem</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            We provide the end-to-end infrastructure required for modern digital advertising.
          </p>
        </div>

        {/* 3D Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Text */}
              <div className="relative z-10 mt-auto">
                <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h4>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {item.subtitle}
                </h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all cursor-pointer">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}