// // // import React from "react";

// // // const workflowSteps = [
// // //   {
// // //     id: 1,
// // //     title: "Campaign Setup",
// // //     description:
// // //       "Upload your creative assets and define campaign parameters through our intuitive dashboard. Set targeting criteria and budget allocation.",
// // //     icon: (
// // //       <svg
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-10 w-10 text-white"
// // //         fill="none"
// // //         viewBox="0 0 24 24"
// // //         stroke="currentColor"
// // //         strokeWidth={2}>
// // //         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
// // //         <polyline points="17 8 12 3 7 8"></polyline>
// // //         <line x1="12" y1="3" x2="12" y2="15"></line>
// // //       </svg>
// // //     ),
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Location Selection",
// // //     description:
// // //       "Choose from our network of digital screens in Bangalore and Amaravathi. Select premium locations based on your target audience.",
// // //     icon: (
// // //       <svg
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-10 w-10 text-white"
// // //         fill="none"
// // //         viewBox="0 0 24 24"
// // //         stroke="currentColor"
// // //         strokeWidth={2}>
// // //         <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
// // //         <circle cx="12" cy="10" r="3"></circle>
// // //       </svg>
// // //     ),
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Content Scheduling",
// // //     description:
// // //       "Schedule your campaigns with flexible timing options. The platform will manage content deployment and ensure optimal display scheduling.",
// // //     icon: (
// // //       <svg
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-10 w-10 text-white"
// // //         fill="none"
// // //         viewBox="0 0 24 24"
// // //         stroke="currentColor"
// // //         strokeWidth={2}>
// // //         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
// // //         <circle cx="12" cy="12" r="3"></circle>
// // //       </svg>
// // //     ),
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Performance Tracking",
// // //     description:
// // //       "Monitor campaign performance through comprehensive dashboards with detailed metrics, reports, and insights for campaign optimization.",
// // //     icon: (
// // //       <svg
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-10 w-10 text-white"
// // //         fill="none"
// // //         viewBox="0 0 24 24"
// // //         stroke="currentColor"
// // //         strokeWidth={2}>
// // //         <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
// // //         <polyline points="16 7 22 7 22 13"></polyline>
// // //       </svg>
// // //     ),
// // //   },
// // // ];

// // // export default function PlatformWorkflow() {
// // //   return (
// // //     <section className="py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
// // //       <div className="max-w-[120rem] mx-auto relative z-10">
// // //         {/* Header */}
// // //         <div className="text-center mb-16">
// // //           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-blue-500/20 mb-8">
// // //             <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className="h-5 w-5 text-blue-600"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //               strokeWidth={2}>
// // //               <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
// // //               <circle cx="12" cy="12" r="3"></circle>
// // //             </svg>
// // //             <span className="font-paragraph text-sm font-semibold text-blue-600">
// // //               Platform Workflow
// // //             </span>
// // //           </div>

// // //           <h2 className="text-5xl font-heading font-bold text-midnight-navy mb-6">
// // //             How It Works
// // //           </h2>
// // //           <p className="text-xl font-paragraph text-midnight-navy/80 max-w-3xl mx-auto">
// // //             Simple four-step process planned for campaign deployment and
// // //             management. From setup to performance tracking, our platform ensures
// // //             efficient campaign execution.
// // //           </p>
// // //         </div>

// // //         {/* Workflow Steps */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {workflowSteps.map((step) => (
// // //             <div
// // //               key={step.id}
// // //               className="text-center group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
// // //               <div className="relative mb-6">
// // //                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
// // //                   {step.icon}
// // //                 </div>
// // //                 {/* Number circle */}
// // //                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-midnight-navy text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">
// // //                   {step.id}
// // //                 </div>
// // //               </div>
// // //               <h3 className="text-xl font-heading font-semibold text-midnight-navy mb-4 group-hover:text-blue-600 transition-colors duration-300">
// // //                 {step.title}
// // //               </h3>
// // //               <p className="font-paragraph text-midnight-navy/80">
// // //                 {step.description}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React, { useRef, useState, useEffect } from "react";
// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import { Monitor, MapPin, Clock, BarChart3, CheckCircle2 } from "lucide-react";
// // import clsx from "clsx";

// // const steps = [
// //   {
// //     id: 1,
// //     title: "Campaign Setup",
// //     desc: "Upload assets and define your target audience parameters in our dashboard.",
// //     icon: Monitor,
// //     // Abstract UI representation for the visual side
// //     Visual: () => (
// //       <div className="w-full h-full bg-slate-900 rounded-xl border border-white/10 p-4 relative overflow-hidden flex flex-col gap-3">
// //         {/* Mock UI: Header */}
// //         <div className="flex gap-2">
// //             <div className="w-3 h-3 rounded-full bg-red-500/20" />
// //             <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
// //         </div>
// //         {/* Mock UI: Upload Area */}
// //         <motion.div 
// //             initial={{ scale: 0.9, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //             className="flex-1 border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center bg-white/5"
// //         >
// //             <div className="text-center">
// //                 <div className="w-10 h-10 bg-cyan-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
// //                     <Monitor className="w-5 h-5 text-cyan-400" />
// //                 </div>
// //                 <div className="h-2 w-20 bg-white/10 rounded mx-auto" />
// //             </div>
// //         </motion.div>
// //       </div>
// //     )
// //   },
// //   {
// //     id: 2,
// //     title: "Location Selection",
// //     desc: "Select specific screens in malls, tech parks, or metro stations via our interactive map.",
// //     icon: MapPin,
// //     Visual: () => (
// //       <div className="w-full h-full bg-slate-900 rounded-xl border border-white/10 p-4 relative overflow-hidden">
// //         {/* Mock Map Grid */}
// //         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
// //         {/* Pins Popping Up */}
// //         {[1, 2, 3].map((i) => (
// //             <motion.div
// //                 key={i}
// //                 initial={{ scale: 0 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{ delay: i * 0.2, type: "spring" }}
// //                 className="absolute w-8 h-8 -ml-4 -mt-8"
// //                 style={{ top: `${30 + i * 20}%`, left: `${20 + i * 25}%` }}
// //             >
// //                 <MapPin className="w-full h-full text-cyan-500 fill-cyan-500/20 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
// //             </motion.div>
// //         ))}
// //       </div>
// //     )
// //   },
// //   {
// //     id: 3,
// //     title: "Smart Scheduling",
// //     desc: "Set time-of-day targeting. Our AI optimizes frequency based on crowd density.",
// //     icon: Clock,
// //     Visual: () => (
// //       <div className="w-full h-full bg-slate-900 rounded-xl border border-white/10 p-6 flex items-center justify-center relative overflow-hidden">
// //          {/* Clock/Time Visual */}
// //          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />
// //          <motion.div 
// //             animate={{ rotate: 360 }}
// //             transition={{ duration: 10, ease: "linear", repeat: Infinity }}
// //             className="w-32 h-32 rounded-full border-2 border-white/10 border-t-cyan-400 relative"
// //          >
// //             <div className="absolute top-1/2 left-1/2 w-1 h-12 bg-gradient-to-t from-cyan-400 to-transparent -translate-x-1/2 -translate-y-full origin-bottom" />
// //          </motion.div>
// //          <div className="absolute bottom-6 left-6 right-6 h-10 bg-white/5 rounded flex gap-1 p-1">
// //             {[...Array(5)].map((_, i) => (
// //                 <motion.div 
// //                     key={i}
// //                     initial={{ height: "30%" }}
// //                     animate={{ height: ["30%", "80%", "30%"] }}
// //                     transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
// //                     className="flex-1 bg-cyan-500/30 rounded-sm self-end"
// //                 />
// //             ))}
// //          </div>
// //       </div>
// //     )
// //   },
// //   {
// //     id: 4,
// //     title: "Real-Time Tracking",
// //     desc: "Watch live metrics. Get proof-of-play reports and ROI analysis instantly.",
// //     icon: BarChart3,
// //     Visual: () => (
// //       <div className="w-full h-full bg-slate-900 rounded-xl border border-white/10 p-4 flex flex-col relative overflow-hidden">
// //          <div className="flex justify-between items-end h-full gap-2 px-4 pb-4">
// //             {[30, 50, 40, 70, 90, 60, 80].map((h, i) => (
// //                 <motion.div
// //                     key={i}
// //                     initial={{ height: 0 }}
// //                     animate={{ height: `${h}%` }}
// //                     transition={{ delay: i * 0.1, duration: 0.5 }}
// //                     className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]"
// //                 />
// //             ))}
// //          </div>
// //          {/* Floating Badge */}
// //          <motion.div 
// //             initial={{ y: 20, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ delay: 1 }}
// //             className="absolute top-4 right-4 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-2 py-1 rounded flex items-center gap-1"
// //          >
// //             <CheckCircle2 className="w-3 h-3" /> Live
// //          </motion.div>
// //       </div>
// //     )
// //   }
// // ];

// // export default function PlatformWorkflow() {
// //   const containerRef = useRef(null);
// //   const [activeStep, setActiveStep] = useState(0);
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"]
// //   });

// //   // Calculate which step is active based on scroll position
// //   useEffect(() => {
// //     const unsubscribe = scrollYProgress.on("change", (latest) => {
// //         // Divide scroll space into 4 segments
// //         const stepIndex = Math.floor(latest * steps.length);
// //         // Clamp between 0 and 3
// //         const safeIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);
// //         setActiveStep(safeIndex);
// //     });
// //     return () => unsubscribe();
// //   }, [scrollYProgress]);

// //   return (
// //     <section className="bg-black py-24 px-6 md:px-12 relative">
// //       <div className="max-w-[120rem] mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-24">
// //             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
// //                 Workflow <span className="text-cyan-500">Intelligence</span>
// //             </h2>
// //             <p className="text-white/50 text-xl max-w-2xl mx-auto">
// //                 From concept to conversion in four simple, automated steps.
// //             </p>
// //         </div>

// //         <div ref={containerRef} className="relative flex flex-col md:flex-row gap-10 h-[300vh]">
          
// //           {/* --- LEFT SIDE: Sticky Visual (Desktop) --- */}
// //           {/* We make this sticky so it stays in view while the right side scrolls */}
// //           <div className="hidden md:flex flex-1 sticky top-32 h-[500px] items-center justify-center">
// //             <div className="relative w-full max-w-lg aspect-square">
// //                 {/* Background Glow */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full" />
                
// //                 {/* The Active Visual Component */}
// //                 <div className="relative z-10 w-full h-full">
// //                      {steps.map((step, index) => (
// //                         <motion.div
// //                             key={step.id}
// //                             initial={{ opacity: 0, scale: 0.95, display: "none" }}
// //                             animate={{ 
// //                                 opacity: activeStep === index ? 1 : 0,
// //                                 scale: activeStep === index ? 1 : 0.95,
// //                                 display: activeStep === index ? "block" : "none"
// //                             }}
// //                             transition={{ duration: 0.5 }}
// //                             className="absolute inset-0"
// //                         >
// //                             <step.Visual />
// //                         </motion.div>
// //                      ))}
// //                 </div>
// //             </div>
// //           </div>

// //           {/* --- RIGHT SIDE: Scrollable Steps --- */}
// //           <div className="flex-1 flex flex-col">
// //             {steps.map((step, index) => (
// //               <motion.div
// //                 key={step.id}
// //                 className={clsx(
// //                   "h-[75vh] flex flex-col justify-center p-8 border-l-2 transition-colors duration-500",
// //                   activeStep === index ? "border-cyan-500" : "border-white/10"
// //                 )}
// //                 initial={{ opacity: 0.3 }}
// //                 whileInView={{ opacity: 1 }}
// //                 viewport={{ margin: "-20% 0px -20% 0px" }} // Trigger animation when in center
// //               >
// //                 <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
// //                     <step.icon className={clsx(
// //                         "w-8 h-8 transition-colors duration-300",
// //                         activeStep === index ? "text-cyan-400" : "text-white/40"
// //                     )} />
// //                 </div>
// //                 <h3 className={clsx(
// //                     "text-3xl md:text-5xl font-bold mb-4 transition-colors duration-300",
// //                     activeStep === index ? "text-white" : "text-white/40"
// //                 )}>
// //                     {step.title}
// //                 </h3>
// //                 <p className="text-xl text-white/60 max-w-md leading-relaxed">
// //                     {step.desc}
// //                 </p>
                
// //                 {/* Mobile-only visual (since sticky is hidden on small screens) */}
// //                 <div className="md:hidden mt-8 h-64 w-full">
// //                     <step.Visual />
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll } from "framer-motion";
// import { Monitor, MapPin, Clock, BarChart3, CheckCircle2, Zap, Users, Scan, Globe } from "lucide-react";
// import clsx from "clsx";

// const steps = [
//   {
//     id: 1,
//     title: "Campaign Setup",
//     desc: "Upload assets and define your target audience parameters in our dashboard.",
//     icon: Monitor,
//     Visual: () => (
//       <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-4 relative overflow-hidden flex flex-col gap-3">
//         {/* Mock UI: Header */}
//         <div className="flex gap-2 mb-2">
//             <div className="w-2 h-2 rounded-full bg-red-500/50" />
//             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
//             <div className="w-2 h-2 rounded-full bg-green-500/50" />
//         </div>
//         {/* Mock UI: Upload Area */}
//         <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="flex-1 border-2 border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center bg-white/5 group relative"
//         >
//              {/* Scanning Line Effect */}
//              <motion.div 
//                 animate={{ top: ["0%", "100%"] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-0 right-0 h-0.5 bg-cyan-500/50 shadow-[0_0_10px_cyan]"
//              />

//             <div className="w-12 h-12 bg-cyan-500/10 rounded-full mb-3 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
//                 <Monitor className="w-6 h-6 text-cyan-400" />
//             </div>
//             <div className="h-2 w-24 bg-white/10 rounded mb-2" />
//             <div className="h-2 w-16 bg-white/5 rounded" />
            
//             {/* Upload Progress Bar Animation */}
//             <div className="absolute bottom-6 left-6 right-6">
//                 <div className="flex justify-between text-[10px] text-white/40 mb-1">
//                     <span>UPLOADING ASSETS...</span>
//                     <span>85%</span>
//                 </div>
//                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
//                     <motion.div 
//                         initial={{ width: 0 }}
//                         animate={{ width: "85%" }}
//                         transition={{ duration: 1.5 }}
//                         className="h-full bg-cyan-500" 
//                     />
//                 </div>
//             </div>
//         </motion.div>
//       </div>
//     )
//   },
//   {
//     id: 2,
//     title: "Location Selection",
//     desc: "Select specific screens in Bangalore, Amaravathi, and key metro hubs via our interactive India map.",
//     icon: MapPin,
//     Visual: () => (
//       <div className="w-full h-full bg-[#050505] rounded-xl border border-white/10 relative overflow-hidden group">
        
//         {/* 1. Base Grid Layer */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
//         {/* 2. Stylized India Map SVG */}
//         <div className="absolute inset-0 flex items-center justify-center p-6">
//             <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
//                 <defs>
//                     <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                         <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
//                         <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
//                     </linearGradient>
//                 </defs>
                
//                 {/* Simplified India Map Polygon */}
//                 <path 
//                     d="M 140 20 L 190 10 L 230 40 L 250 80 L 320 100 L 340 130 L 310 160 L 290 150 L 260 180 L 270 220 L 240 280 L 200 450 L 160 450 L 120 280 L 60 220 L 20 180 L 60 140 L 100 150 L 120 100 Z" 
//                     fill="url(#mapGradient)" 
//                     stroke="rgba(6, 182, 212, 0.5)" 
//                     strokeWidth="1.5"
//                     strokeLinejoin="round"
//                 />

//                 {/* Network Connections (Lines) */}
//                 <motion.path
//                     d="M 180 400 L 240 360 M 180 400 L 110 200 M 240 360 L 110 200"
//                     stroke="cyan"
//                     strokeWidth="1"
//                     strokeDasharray="4 4"
//                     fill="none"
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 0.4 }}
//                     transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
//                 />

//                 {/* --- Location Pins --- */}
                
//                 {/* 1. Bangalore (South) */}
//                 <foreignObject x="160" y="380" width="40" height="40">
//                     <div className="relative w-full h-full flex items-center justify-center group/pin">
//                         <div className="absolute w-full h-full bg-cyan-500/30 rounded-full animate-ping" />
//                         <div className="relative z-10 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white shadow-[0_0_10px_cyan]" />
//                         {/* Tooltip */}
//                         <div className="absolute bottom-full mb-2 bg-black/90 border border-cyan-500/30 px-2 py-1 rounded text-[10px] text-cyan-400 whitespace-nowrap opacity-100">
//                             Bangalore
//                         </div>
//                     </div>
//                 </foreignObject>

//                 {/* 2. Amaravathi (South East) */}
//                 <foreignObject x="220" y="340" width="40" height="40">
//                     <div className="relative w-full h-full flex items-center justify-center group/pin">
//                         <div className="absolute w-full h-full bg-blue-500/30 rounded-full animate-ping delay-300" />
//                         <div className="relative z-10 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-[0_0_10px_blue]" />
//                          {/* Tooltip */}
//                          <div className="absolute bottom-full mb-2 bg-black/90 border border-blue-500/30 px-2 py-1 rounded text-[10px] text-blue-400 whitespace-nowrap opacity-100">
//                             Amaravathi
//                         </div>
//                     </div>
//                 </foreignObject>

//                  {/* 3. Mumbai (West - Future) */}
//                  <foreignObject x="80" y="260" width="20" height="20">
//                     <div className="relative w-full h-full flex items-center justify-center opacity-50">
//                         <div className="w-2 h-2 bg-white/50 rounded-full" />
//                     </div>
//                 </foreignObject>
//                  {/* 4. Delhi (North - Future) */}
//                  <foreignObject x="130" y="120" width="20" height="20">
//                     <div className="relative w-full h-full flex items-center justify-center opacity-50">
//                         <div className="w-2 h-2 bg-white/50 rounded-full" />
//                     </div>
//                 </foreignObject>

//             </svg>
//         </div>

//         {/* 3. Radar Sweep Effect */}
//         <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(6,182,212,0.05)_360deg)] animate-[spin_8s_linear_infinite]" />

//         {/* 4. HUD Overlay Elements */}
//         <div className="absolute top-4 right-4 flex flex-col gap-1 items-end pointer-events-none">
//             <div className="flex items-center gap-1 text-[10px] text-cyan-500 font-mono bg-cyan-950/30 px-2 py-1 rounded border border-cyan-500/20">
//                 <Globe className="w-3 h-3" /> PAN-INDIA NETWORK
//             </div>
//         </div>
        
//         <div className="absolute bottom-4 left-4 pointer-events-none">
//             <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono">
//                 <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//                 <span>2 Active Hubs</span>
//             </div>
//         </div>
//       </div>
//     )
//   },
//   {
//     id: 3,
//     title: "Smart Scheduling",
//     desc: "Set time-of-day targeting. Our AI optimizes frequency based on crowd density.",
//     icon: Clock,
//     Visual: () => (
//       <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-6 flex flex-col relative overflow-hidden">
//          {/* Background Scan Line */}
//          <motion.div 
//             animate={{ top: ["0%", "100%"] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0"
//          />

//          {/* Header */}
//          <div className="flex justify-between items-center mb-6 z-10 border-b border-white/5 pb-2">
//             <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Crowd Analyzer</span>
//             <div className="flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded-full">
//                 <Users className="w-3 h-3" />
//                 AI Active
//             </div>
//          </div>

//          {/* Time Slots Visualization */}
//          <div className="flex-1 flex flex-col justify-between gap-3 z-10">
//             {[
//                 { time: "09:00 AM", traffic: 30, label: "Low" },
//                 { time: "01:00 PM", traffic: 65, label: "Med" },
//                 { time: "06:00 PM", traffic: 95, label: "Peak", active: true }
//             ].map((slot, i) => (
//                 <div key={i} className={clsx(
//                     "relative flex items-center gap-3 p-2 rounded-lg border transition-all duration-500",
//                     slot.active ? "bg-cyan-950/20 border-cyan-500/30" : "bg-transparent border-white/5 opacity-50"
//                 )}>
//                     {/* Time Label */}
//                     <span className="text-xs font-mono text-white/60 w-16">{slot.time}</span>
                    
//                     {/* Traffic Bar */}
//                     <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
//                         <motion.div 
//                             initial={{ width: 0 }}
//                             animate={{ width: `${slot.traffic}%` }}
//                             transition={{ duration: 1, delay: i * 0.3 }}
//                             className={clsx(
//                                 "h-full rounded-full",
//                                 slot.active ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-white/20"
//                             )}
//                         />
//                     </div>

//                     {/* Badge */}
//                     {slot.active && (
//                         <motion.div 
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className="absolute right-2 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-black"
//                         >
//                             <Zap className="w-3 h-3 fill-black" />
//                         </motion.div>
//                     )}
//                 </div>
//             ))}
//          </div>
         
//          {/* Bottom Status */}
//          <div className="mt-4 pt-2 border-t border-white/5 text-center">
//              <span className="text-[10px] text-white/30">Optimizing for Maximum Impressions...</span>
//          </div>
//       </div>
//     )
//   },
//   {
//     id: 4,
//     title: "Real-Time Tracking",
//     desc: "Watch live metrics. Get proof-of-play reports and ROI analysis instantly.",
//     icon: BarChart3,
//     Visual: () => (
//       <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-4 flex flex-col relative overflow-hidden">
//          {/* Data Rain Background */}
//          <div className="absolute inset-0 opacity-10 flex justify-between px-2">
//             {[...Array(5)].map((_, i) => (
//                 <motion.div 
//                     key={i}
//                     animate={{ y: ["-100%", "100%"] }}
//                     transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
//                     className="w-px h-20 bg-gradient-to-b from-transparent to-white"
//                 />
//             ))}
//          </div>

//          <div className="flex justify-between items-end h-full gap-2 px-4 pb-4 z-10">
//             {[30, 50, 40, 70, 90, 60, 80].map((h, i) => (
//                 <motion.div
//                     key={i}
//                     initial={{ height: 0 }}
//                     animate={{ height: `${h}%` }}
//                     transition={{ delay: i * 0.1, duration: 0.5 }}
//                     className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] relative group"
//                 >
//                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
//                         {h}%
//                     </div>
//                 </motion.div>
//             ))}
//          </div>
//          {/* Floating Badge */}
//          <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="absolute top-4 right-4 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
//          >
//             <CheckCircle2 className="w-3 h-3" /> Live Feed
//          </motion.div>
//       </div>
//     )
//   }
// ];

// export default function PlatformWorkflow() {
//   const containerRef = useRef(null);
//   const [activeStep, setActiveStep] = useState(0);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Calculate which step is active based on scroll position
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//         const stepIndex = Math.floor(latest * steps.length);
//         const safeIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);
//         setActiveStep(safeIndex);
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <section className="bg-black py-24 px-6 md:px-12 relative">
//       <div className="max-w-[120rem] mx-auto">
//         {/* Header */}
//         <div className="text-center mb-24">
//             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                 Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Intelligence</span>
//             </h2>
//             <p className="text-white/50 text-xl max-w-2xl mx-auto">
//                 From concept to conversion in four simple, automated steps.
//             </p>
//         </div>

//         <div ref={containerRef} className="relative flex flex-col md:flex-row gap-10 h-[300vh]">
          
//           {/* --- LEFT SIDE: Sticky Visual (Desktop) --- */}
//           <div className="hidden md:flex flex-1 sticky top-32 h-[500px] items-center justify-center">
//             <div className="relative w-full max-w-lg aspect-square">
//                 {/* Background Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-3xl rounded-full" />
                
//                 {/* The Active Visual Component */}
//                 <div className="relative z-10 w-full h-full">
//                      {steps.map((step, index) => (
//                         <motion.div
//                             key={step.id}
//                             initial={{ opacity: 0, scale: 0.95, display: "none" }}
//                             animate={{ 
//                                 opacity: activeStep === index ? 1 : 0,
//                                 scale: activeStep === index ? 1 : 0.95,
//                                 display: activeStep === index ? "block" : "none"
//                             }}
//                             transition={{ duration: 0.5 }}
//                             className="absolute inset-0"
//                         >
//                             <step.Visual />
//                         </motion.div>
//                      ))}
//                 </div>
//             </div>
//           </div>

//           {/* --- RIGHT SIDE: Scrollable Steps --- */}
//           <div className="flex-1 flex flex-col">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.id}
//                 className={clsx(
//                   "h-[75vh] flex flex-col justify-center p-8 border-l-2 transition-colors duration-500",
//                   activeStep === index ? "border-cyan-500" : "border-white/10"
//                 )}
//                 initial={{ opacity: 0.3 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ margin: "-20% 0px -20% 0px" }}
//               >
//                 <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
//                     <step.icon className={clsx(
//                         "w-8 h-8 transition-colors duration-300",
//                         activeStep === index ? "text-cyan-400" : "text-white/40"
//                     )} />
//                 </div>
//                 <h3 className={clsx(
//                     "text-3xl md:text-5xl font-bold mb-4 transition-colors duration-300",
//                     activeStep === index ? "text-white" : "text-white/40"
//                 )}>
//                     {step.title}
//                 </h3>
//                 <p className="text-xl text-white/60 max-w-md leading-relaxed">
//                     {step.desc}
//                 </p>
                
//                 {/* Mobile-only visual */}
//                 <div className="md:hidden mt-8 h-64 w-full">
//                     <step.Visual />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Monitor, MapPin, Clock, BarChart3, CheckCircle2, Zap, Users, Scan, Globe } from "lucide-react";
import clsx from "clsx";

// Import your map image here if using local assets
import indiaMap from "../assets/india-map-tech.png"; 

const steps = [
  {
    id: 1,
    title: "Campaign Setup",
    desc: "Upload assets and define your target audience parameters in our dashboard.",
    icon: Monitor,
    Visual: () => (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-4 relative overflow-hidden flex flex-col gap-3">
        {/* Mock UI: Header */}
        <div className="flex gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        {/* Mock UI: Upload Area */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 border-2 border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center bg-white/5 group relative"
        >
             {/* Scanning Line Effect */}
             <motion.div 
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-cyan-500/50 shadow-[0_0_10px_cyan]"
             />

            <div className="w-12 h-12 bg-cyan-500/10 rounded-full mb-3 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                <Monitor className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="h-2 w-24 bg-white/10 rounded mb-2" />
            <div className="h-2 w-16 bg-white/5 rounded" />
            
            {/* Upload Progress Bar Animation */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between text-[10px] text-white/40 mb-1">
                    <span>UPLOADING ASSETS...</span>
                    <span>85%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-cyan-500" 
                    />
                </div>
            </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 2,
    title: "Location Selection",
    desc: "Select specific screens in Bangalore, Amaravathi, and key metro hubs via our interactive India map.",
    icon: MapPin,
    Visual: () => (
      <div className="w-full h-full bg-[#050505] rounded-xl border border-white/10 relative overflow-hidden group flex items-center justify-center">
        
        {/* 1. Base Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* 2. The Map Image Container */}
        <div className="relative w-[80%] h-[80%] z-10">
            {/* REPLACE 'src' WITH YOUR LOCAL FILE OR URL.
               Use a transparent PNG of the India Outline.
            */}
            <img 
                src={indiaMap}
                alt="India Map Network" 
                className="w-full h-full object-contain opacity-40 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] invert"
            />
            
            {/* Overlay Gradient to make it look "Holographic" */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent mix-blend-overlay pointer-events-none" />

            {/* --- PINS (Positioned using % relative to the map image container) --- */}
            {/* You may need to tweak top/left % slightly depending on your specific image's cropping */}

            {/* Bangalore Pin */}
            <div className="absolute top-[78%] left-[28%] group/pin">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-cyan-500/30 rounded-full animate-ping" />
                    <div className="relative z-10 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white shadow-[0_0_15px_cyan]" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 -left-8 bg-black/90 border border-cyan-500/50 px-3 py-1 rounded text-[10px] text-cyan-400 whitespace-nowrap">
                        <span className="font-bold">Bangalore</span>
                        <div className="text-[9px] text-white/50">200 Screens</div>
                    </div>
                </div>
            </div>

            {/* Amaravathi Pin */}
            <div className="absolute top-[67%] left-[37%] group/pin">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping delay-75" />
                    <div className="relative z-10 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-[0_0_15px_blue]" />
                     
                     {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-2 bg-black/90 border border-blue-500/50 px-3 py-1 rounded text-[10px] text-blue-400 whitespace-nowrap">
                        <span className="font-bold">Amaravathi</span>
                        <div className="text-[9px] text-white/50">150 Screens</div>
                    </div>
                </div>
            </div>

            {/* Connecting Data Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <motion.line 
                    x1="29%" y1="79%" 
                    x2="38%" y2="68%" 
                    stroke="cyan" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>
        </div>

        {/* 3. Radar Sweep Effect (Over the whole container) */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(6,182,212,0.1)_360deg)] animate-[spin_8s_linear_infinite]" />

        {/* 4. HUD Overlay Elements */}
        <div className="absolute top-4 right-4 flex flex-col gap-1 items-end pointer-events-none">
            <div className="flex items-center gap-1 text-[10px] text-cyan-500 font-mono bg-cyan-950/30 px-2 py-1 rounded border border-cyan-500/20">
                <Globe className="w-3 h-3" /> PAN-INDIA NETWORK
            </div>
        </div>
        
        <div className="absolute bottom-4 left-4 pointer-events-none">
            <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>2 Active Hubs</span>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Smart Scheduling",
    desc: "Set time-of-day targeting. Our AI optimizes frequency based on crowd density.",
    icon: Clock,
    Visual: () => (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-6 flex flex-col relative overflow-hidden">
         {/* Background Scan Line */}
         <motion.div 
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0"
         />

         {/* Header */}
         <div className="flex justify-between items-center mb-6 z-10 border-b border-white/5 pb-2">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Crowd Analyzer</span>
            <div className="flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded-full">
                <Users className="w-3 h-3" />
                AI Active
            </div>
         </div>

         {/* Time Slots Visualization */}
         <div className="flex-1 flex flex-col justify-between gap-3 z-10">
            {[
                { time: "09:00 AM", traffic: 30, label: "Low" },
                { time: "01:00 PM", traffic: 65, label: "Med" },
                { time: "06:00 PM", traffic: 95, label: "Peak", active: true }
            ].map((slot, i) => (
                <div key={i} className={clsx(
                    "relative flex items-center gap-3 p-2 rounded-lg border transition-all duration-500",
                    slot.active ? "bg-cyan-950/20 border-cyan-500/30" : "bg-transparent border-white/5 opacity-50"
                )}>
                    {/* Time Label */}
                    <span className="text-xs font-mono text-white/60 w-16">{slot.time}</span>
                    
                    {/* Traffic Bar */}
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${slot.traffic}%` }}
                            transition={{ duration: 1, delay: i * 0.3 }}
                            className={clsx(
                                "h-full rounded-full",
                                slot.active ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-white/20"
                            )}
                        />
                    </div>

                    {/* Badge */}
                    {slot.active && (
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute right-2 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-black"
                        >
                            <Zap className="w-3 h-3 fill-black" />
                        </motion.div>
                    )}
                </div>
            ))}
         </div>
         
         {/* Bottom Status */}
         <div className="mt-4 pt-2 border-t border-white/5 text-center">
             <span className="text-[10px] text-white/30">Optimizing for Maximum Impressions...</span>
         </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Real-Time Tracking",
    desc: "Watch live metrics. Get proof-of-play reports and ROI analysis instantly.",
    icon: BarChart3,
    Visual: () => (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-4 flex flex-col relative overflow-hidden">
         {/* Data Rain Background */}
         <div className="absolute inset-0 opacity-10 flex justify-between px-2">
            {[...Array(5)].map((_, i) => (
                <motion.div 
                    key={i}
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                    className="w-px h-20 bg-gradient-to-b from-transparent to-white"
                />
            ))}
         </div>

         <div className="flex justify-between items-end h-full gap-2 px-4 pb-4 z-10">
            {[30, 50, 40, 70, 90, 60, 80].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] relative group"
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                    </div>
                </motion.div>
            ))}
         </div>
         {/* Floating Badge */}
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-4 right-4 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
         >
            <CheckCircle2 className="w-3 h-3" /> Live Feed
         </motion.div>
      </div>
    )
  }
];

export default function PlatformWorkflow() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which step is active based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
        const stepIndex = Math.floor(latest * steps.length);
        const safeIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);
        setActiveStep(safeIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="bg-black py-24 px-6 md:px-12 relative">
      <div className="max-w-[120rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Intelligence</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
                From concept to conversion in four simple, automated steps.
            </p>
        </div>

        <div ref={containerRef} className="relative flex flex-col md:flex-row gap-10 h-[300vh]">
          
          {/* --- LEFT SIDE: Sticky Visual (Desktop) --- */}
          <div className="hidden md:flex flex-1 sticky top-32 h-[500px] items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-3xl rounded-full" />
                
                {/* The Active Visual Component */}
                <div className="relative z-10 w-full h-full">
                     {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, scale: 0.95, display: "none" }}
                            animate={{ 
                                opacity: activeStep === index ? 1 : 0,
                                scale: activeStep === index ? 1 : 0.95,
                                display: activeStep === index ? "block" : "none"
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <step.Visual />
                        </motion.div>
                     ))}
                </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Scrollable Steps --- */}
          <div className="flex-1 flex flex-col">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={clsx(
                  "h-[75vh] flex flex-col justify-center p-8 border-l-2 transition-colors duration-500",
                  activeStep === index ? "border-cyan-500" : "border-white/10"
                )}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
                    <step.icon className={clsx(
                        "w-8 h-8 transition-colors duration-300",
                        activeStep === index ? "text-cyan-400" : "text-white/40"
                    )} />
                </div>
                <h3 className={clsx(
                    "text-3xl md:text-5xl font-bold mb-4 transition-colors duration-300",
                    activeStep === index ? "text-white" : "text-white/40"
                )}>
                    {step.title}
                </h3>
                <p className="text-xl text-white/60 max-w-md leading-relaxed">
                    {step.desc}
                </p>
                
                {/* Mobile-only visual */}
                <div className="md:hidden mt-8 h-64 w-full">
                    <step.Visual />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}