// // import {
// //   Lightbulb,
// //   ChartNoAxesColumnIncreasing,
// //   ChartPie,
// //   ChartLine,
// //   TrendingUp,
// //   Brain,
// // } from "lucide-react";

// // export default function AddSection() {
// //   return (
// //     <section className="relative overflow-hidden py-32 px-6 md:px-8 max-w-[120rem] mx-auto">
// //       {/* gradient background blobs */}
// //       <div className="absolute inset-0">
// //         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
// //         <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-600/30 to-purple-500/30 rounded-full blur-3xl"></div>
// //       </div>

// //       <div className="relative grid lg:grid-cols-2 gap-20 items-center z-10">
// //         {/* left column */}
// //         <div>
// //           {/* small badge */}
// //           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-8 border border-blue-500/20">
// //             <Lightbulb className="h-5 w-5 text-blue-600" />
// //             <span className="text-sm font-semibold text-blue-600">
// //               Industry Challenge
// //             </span>
// //           </div>

// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
// //             Digital Advertising{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
// //               Opportunity
// //             </span>
// //           </h2>

// //           {/* feature cards */}
// //           <div className="space-y-8">
// //             {[
// //               {
// //                 icon: ChartNoAxesColumnIncreasing,
// //                 text: "Growing demand for digital advertising solutions in major cities like Bangalore and Amaravathi",
// //               },
// //               {
// //                 icon: ChartPie,
// //                 text: "Businesses seeking cost-effective alternatives to traditional outdoor advertising",
// //               },
// //               {
// //                 icon: ChartLine,
// //                 text: "Increasing preference for measurable and trackable advertising campaigns",
// //               },
// //               {
// //                 icon: ChartNoAxesColumnIncreasing,
// //                 text: "Rising adoption of digital screens in premium commercial locations",
// //               },
// //             ].map((item, i) => (
// //               <div
// //                 key={i}
// //                 className="group cursor-pointer transition-all duration-300"
// //               >
// //                 <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md">
// //                   <div className="flex items-start gap-5">
// //                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
// //                       <item.icon className="h-6 w-6 text-white" />
// //                     </div>
// //                     <p className="text-lg text-gray-800/80 font-medium group-hover:text-gray-900 transition-colors duration-300">
// //                       {item.text}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* vision card */}
// //             <div className="mt-12">
// //               <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-8 rounded-2xl shadow-sm">
// //                 <div className="flex items-center gap-6">
// //                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm animate-pulse">
// //                     <TrendingUp className="h-8 w-8 text-white" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
// //                       Our Vision
// //                     </h3>
// //                     <p className="text-lg text-gray-800/80">
// //                       Planning to deploy{" "}
// //                       <span className="font-bold text-xl text-blue-600">
// //                         500 screens
// //                       </span>{" "}
// //                       across Bangalore and Amaravathi, laying the foundation for
// //                       a comprehensive digital advertising network.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* right column - image & floating badges */}
// //         <div className="relative">
// //           <div className="relative group">
// //             <img
// //               src="https://static.wixstatic.com/media/3fcaa5_0e37f005f1724a77a76fa624256349f2~mv2.jpg"
// //               alt="ZoShow digital advertising platform interface"
// //               className="w-full rounded-2xl shadow-lg relative z-10 transition-shadow duration-300 group-hover:shadow-xl"
// //             />
// //             {/* floating badge top-right */}
// //             <div className="absolute -top-10 -right-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 shadow-lg border border-blue-400/30 animate-bounce">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-3 h-3 bg-white rounded-full"></div>
// //                 <span className="text-sm font-semibold text-white">
// //                   Live Analytics
// //                 </span>
// //               </div>
// //             </div>
// //             {/* floating badge bottom-left */}
// //             <div className="absolute -bottom-16 -left-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 shadow-lg text-white border border-blue-400/30 animate-bounce delay-150">
// //               <div className="flex items-center gap-3">
// //                 <Brain className="h-5 w-5" />
// //                 <span className="text-sm font-semibold">AI Optimization</span>
// //               </div>
// //             </div>
// //           </div>
// //           {/* subtle rotated background */}
// //           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform rotate-1 scale-105 -z-10"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { X, Check, ArrowRight, Zap, History, LayoutTemplate } from "lucide-react";

// const comparisonData = [
//   {
//     id: 0,
//     problem: "Static Images",
//     solution: "4K Motion Video",
//     desc: "Blends into the background.",
//     benefit: "Demands attention instantly.",
//   },
//   {
//     id: 1,
//     problem: "Zero Data",
//     solution: "Audience Intelligence",
//     desc: "Guesswork based spending.",
//     benefit: "Precision targeting & tracking.",
//   },
//   {
//     id: 2,
//     problem: "Slow Logistics",
//     solution: "Instant Deployment",
//     desc: "Weeks to print & install.",
//     benefit: "Live in seconds, city-wide.",
//   },
//   {
//     id: 3,
//     problem: "Sunk Costs",
//     solution: "Pure Media Value",
//     desc: "Budget wasted on vinyl/glue.",
//     benefit: "100% budget goes to visibility.",
//   },
// ];

// export default function AddSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section className="py-32 px-6 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      
//       {/* --- Elegant Background --- */}
//       <div className="absolute inset-0 pointer-events-none">
//          {/* Subtle radial sheen */}
//          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
//          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>

//       <div className="max-w-7xl w-full mx-auto relative z-10">
        
//         {/* --- Header: Classic & Clean --- */}
//         <div className="text-center mb-24">
//             <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md"
//             >
//                 <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
//                 <span className="text-[10px] font-medium text-white/80 uppercase tracking-[0.2em]">Evolution</span>
//             </motion.div>
            
//             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
//                 Stop <span className="relative inline-block mx-2 text-white/30">
//                     Spending
//                     <motion.div 
//                         initial={{ width: 0 }}
//                         whileInView={{ width: "100%" }}
//                         transition={{ delay: 0.5, duration: 0.8 }}
//                         className="absolute top-1/2 left-0 h-[2px] bg-red-500/50 -rotate-2"
//                     />
//                 </span> 
//                 Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">Investing.</span>
//             </h2>
//             <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
//                 Upgrade your media strategy from passive static billboards to an intelligent, active digital network.
//             </p>
//         </div>

//         {/* --- The Comparison Layout --- */}
//         <div className="relative">
            
//             {/* GRID: Strictly 2 Columns */}
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-stretch">
                
//                 {/* LEFT: THE PAST (Monochrome, Matte, Heavy) */}
//                 <div className="relative p-8 md:p-10 rounded-3xl border border-white/5 bg-[#0F0F0F] overflow-hidden group/left">
//                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/5 to-transparent" />
                    
//                     {/* Header */}
//                     <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
//                         <div>
//                             <div className="text-xs font-mono text-white/20 mb-2">LEGACY FORMAT</div>
//                             <h3 className="text-2xl font-bold text-white/40 flex items-center gap-3">
//                                 <History className="w-6 h-6" />
//                                 Traditional OOH
//                             </h3>
//                         </div>
//                     </div>

//                     {/* List */}
//                     <div className="space-y-3 relative z-10">
//                         {comparisonData.map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 onMouseEnter={() => setHoveredIndex(idx)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                                 className={`
//                                     relative p-5 rounded-xl transition-all duration-300 border cursor-default
//                                     ${hoveredIndex === idx 
//                                         ? "bg-white/5 border-white/10 opacity-100" 
//                                         : "bg-transparent border-transparent opacity-40"
//                                     }
//                                 `}
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div className={`p-2 rounded-lg bg-black/50 border border-white/5 ${hoveredIndex === idx ? "text-red-400" : "text-white/20"}`}>
//                                         <X className="w-4 h-4" />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-lg font-medium text-white/90">{item.problem}</h4>
//                                         <p className="text-sm text-white/40 font-light">{item.desc}</p>
//                                     </div>
//                                 </div>
                                
//                                 {/* Connector Dot */}
//                                 <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${hoveredIndex === idx ? "bg-white opacity-100" : "bg-white/10 opacity-0"}`} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* RIGHT: THE FUTURE (Glass, Sharp, Glowing) */}
//                 <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-sm overflow-hidden group/right">
//                     {/* Hover Glow Background */}
//                     <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
                    
//                     {/* Header */}
//                     <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-6 relative z-10">
//                         <div>
//                             <div className="text-xs font-mono text-cyan-400 mb-2">NEXT GEN PLATFORM</div>
//                             <h3 className="text-2xl font-bold text-white flex items-center gap-3">
//                                 <LayoutTemplate className="w-6 h-6 text-cyan-400" />
//                                 ZoShow Network
//                             </h3>
//                         </div>
//                     </div>

//                     {/* List */}
//                     <div className="space-y-3 relative z-10">
//                         {comparisonData.map((item, idx) => (
//                             <motion.div
//                                 key={idx}
//                                 animate={{
//                                     backgroundColor: hoveredIndex === idx ? "rgba(6,182,212,0.08)" : "transparent",
//                                     borderColor: hoveredIndex === idx ? "rgba(6,182,212,0.3)" : "transparent",
//                                     scale: hoveredIndex === idx ? 1.02 : 1,
//                                 }}
//                                 className="relative p-5 rounded-xl border transition-all duration-300"
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div className={`p-2 rounded-lg border transition-colors ${hoveredIndex === idx ? "bg-cyan-500 text-black border-cyan-400" : "bg-white/5 text-white/30 border-white/5"}`}>
//                                         <Check className="w-4 h-4" />
//                                     </div>
//                                     <div>
//                                         <h4 className={`text-lg font-medium transition-colors ${hoveredIndex === idx ? "text-white" : "text-white/50"}`}>
//                                             {item.solution}
//                                         </h4>
//                                         <p className={`text-sm font-light transition-colors ${hoveredIndex === idx ? "text-cyan-200/70" : "text-white/20"}`}>
//                                             {item.benefit}
//                                         </p>
//                                     </div>
//                                 </div>
                                
//                                 {/* Connector Dot */}
//                                 <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${hoveredIndex === idx ? "bg-cyan-400 opacity-100 shadow-[0_0_10px_cyan]" : "bg-white/10 opacity-0"}`} />
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//             </div>

//             {/* CENTER: Floating Badge (Absolute Positioned) */}
//             <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
//                 {/* The Beam Line */}
//                 {hoveredIndex !== null && (
//                     <motion.div 
//                         layoutId="beam"
//                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px]"
//                         style={{ 
//                             background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 20%, rgba(6,182,212,1) 50%, rgba(255,255,255,0.5) 80%, transparent 100%)',
//                             filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.5))'
//                         }}
//                     />
//                 )}
                
//                 {/* The Badge */}
//                 <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center relative shadow-2xl">
//                     <ArrowRight className={`w-5 h-5 transition-all duration-300 ${hoveredIndex !== null ? "text-cyan-400 scale-110" : "text-white/20"}`} />
//                 </div>
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { MonitorPlay, BrainCircuit, Zap, TrendingUp, ArrowUpRight } from "lucide-react";

const features = [
  {
    id: "visuals",
    category: "Experience",
    title: "Cinematic 4K Motion",
    description: "Transform static spaces into immersive digital theatres. Support for high-bitrate 60fps video ensures your brand looks flawless.",
    icon: MonitorPlay,
    gradient: "from-blue-600 to-cyan-500",
    bgGlow: "bg-cyan-500/20",
  },
  {
    id: "ai",
    category: "Intelligence",
    title: "Audience AI Core",
    description: "Our proprietary computer vision algorithms analyze demographics and attention span in real-time, optimizing ad delivery milliseconds before display.",
    icon: BrainCircuit,
    gradient: "from-purple-600 to-pink-500",
    bgGlow: "bg-purple-500/20",
  },
  {
    id: "speed",
    category: "Velocity",
    title: "Instant Deployment",
    description: "Bypass the weeks of printing and logistics. Push campaign updates to 500+ screens across the city in a single click.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    id: "value",
    category: "Economics",
    title: "Zero-Loss ROI",
    description: "Eliminate production and installation costs. 100% of your budget goes directly to media buying and audience reach.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
];

export default function AddSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[120rem] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-medium text-white/80 uppercase tracking-[0.2em]">The Platform</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Public Attention.</span>
            </h2>
        </div>

        {/* The Expanding Accordion Deck */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
            {features.map((feature, index) => {
                const isActive = activeFeature === index;
                
                return (
                    <motion.div
                        key={feature.id}
                        layout
                        onClick={() => setActiveFeature(index)}
                        onMouseEnter={() => setActiveFeature(index)}
                        className={`
                            relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500
                            ${isActive 
                                ? "flex-[3] border-white/10 shadow-2xl" 
                                : "flex-[1] border-white/5 hover:border-white/20 grayscale hover:grayscale-0"
                            }
                        `}
                    >
                        {/* Background Image / Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`} />
                        <div className={`absolute inset-0 ${feature.bgGlow} opacity-0 transition-opacity duration-500 ${isActive ? "opacity-100" : ""}`} />
                        
                        {/* Content Container */}
                        <div className="relative h-full p-8 flex flex-col justify-end z-10">
                            
                            {/* Inactive State: Vertical Text (Desktop) or Minimal (Mobile) */}
                            {!isActive && (
                                <div className="absolute inset-0 flex items-center justify-center lg:rotate-[-90deg]">
                                    <h3 className="text-2xl font-bold text-white/40 whitespace-nowrap tracking-widest uppercase">
                                        {feature.category}
                                    </h3>
                                </div>
                            )}

                            {/* Active State Content */}
                            <motion.div
                                initial={false}
                                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                                transition={{ duration: 0.4 }}
                                className={`absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">{feature.category}</div>
                                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg text-white/70 max-w-md leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                    
                                    {/* Action Button */}
                                    <div className="hidden sm:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Icon for Inactive State (Visual Anchor) */}
                            {!isActive && (
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0">
                                    <feature.icon className="w-8 h-8 text-white/20" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
}