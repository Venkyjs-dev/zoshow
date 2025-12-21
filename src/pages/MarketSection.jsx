// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";

// export default function MarketSection() {
//   const stats = [
//     { year: 2022, value: "₹1,800 Cr", width: "w-1/3" },
//     { year: 2024, value: "₹2,300 Cr", width: "w-1/2" },
//     { year: 2025, value: "₹2,600 Cr", width: "w-2/3" },
//     { year: 2030, value: "₹5,000 Cr", width: "w-full" },
//   ];

//   return (
//     <section className="py-24 px-6 lg:px-12 bg-[#EDECF6]">
//       <div className="max-w-[120rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* ---- Left text content ---- */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-8">
//             {/* Massive Market Opportunity */}
//             Massive Market Opportunity in Digital Out-of-Home (DOOH)
//           </h2>
//           <p className="text-lg md:text-xl text-[#0F172A]/80 mb-8">
//             {/* The Digital Out-of-Home (DOOH) advertising market in India is
//             experiencing explosive growth, projected to reach ₹1,200 crores by
//             2025. */}
//             India’s DOOH market is already worth ₹2,300 Cr in 2024 and is
//             projected to cross ₹5,000 Cr by 2030 (CAGR ~14%)【MarkNtel Advisors
//             / Mordor Intelligence】. With rapid mall growth (16.6M sq ft new
//             space by 2026) and 271 operational Tier-1 malls, advertisers are
//             shifting fast to indoor digital formats.
//           </p>
//           <ul className="space-y-4">
//             {[
//               "₹2,300 Cr market today, doubling to ₹5,000 Cr by 2030",
//               "271 malls in Tier-1 cities + new Grade-A retail space coming online",
//               "ndoor environments (apartments, hospitals, cafés, malls) = high dwell time & trust",
//               "ZoShow: India’s first AI-powered indoor DOOH network",
//             ].map((item) => (
//               <li key={item} className="flex items-center gap-3">
//                 <CheckCircle2 className="h-6 w-6 text-teal-500" />
//                 <span className="text-lg text-[#0F172A]/80">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ---- Right growth chart ---- */}
//         <div className="relative">
//           <div className="border border-black/10 bg-white p-8 rounded-3xl shadow-2xl">
//             <h3 className="text-2xl font-semibold text-center text-[#0F172A] mb-6">
//               DOOH Market Growth in India
//             </h3>
//             <div className="space-y-6">
//               {stats.map((s, idx) => (
//                 <div key={idx} className="flex items-center justify-between">
//                   <span className="text-[#0F172A]/80">{s.year}</span>
//                   <div className="relative flex-1 mx-4 h-3 rounded-full bg-[#DAD9E8] overflow-hidden">
//                     {/* filled bar */}
//                     <div
//                       className={`h-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 ${s.width}`}
//                     >
//                       {/* moving shine */}
//                       <motion.div
//                         className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-white/20 via-white/60 to-white/20"
//                         animate={{ x: ["-100%", "150%"] }}
//                         transition={{
//                           repeat: Infinity,
//                           duration: 2.5,
//                           ease: "linear",
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <span className="font-semibold text-[#0F172A]">
//                     {s.value}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building2, Wallet } from "lucide-react";

// Reusable Counter Component
const AnimatedCounter = ({ value, label }) => {
    // Basic implementation - in production use 'framer-motion' useSpring for smooth numbers
    return (
        <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tight">
                {value}
            </h3>
            <p className="text-white/50 text-sm uppercase tracking-wider">{label}</p>
        </div>
    )
}

const statsData = [
    { year: "2023", value: 1800, max: 5000 },
    { year: "2024", value: 2300, max: 5000 },
    { year: "2025", value: 2600, max: 5000, active: true }, // Current year highlight
    { year: "2030", value: 5000, max: 5000, future: true },
];

export default function MarketSection() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Decorative Mesh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[120rem] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            
            {/* Left: Text Context */}
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 mb-8">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-bold">Market Intelligence</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    Explosive Growth in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Digital Environments
                    </span>
                </h2>
                
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                    The shift from static to digital out-of-home (DOOH) is accelerating. 
                    With mall space expanding by 16M sq ft, the opportunity to capture 
                    high-intent audiences has never been larger.
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">271+</div>
                            <div className="text-sm text-white/50">Tier-1 Malls</div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">14%</div>
                            <div className="text-sm text-white/50">CAGR Growth</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: The Holographic Chart */}
            <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="absolute top-4 right-6 text-right">
                    <p className="text-xs text-white/40 uppercase tracking-widest">Market Size (Cr)</p>
                </div>

                <div className="space-y-8 mt-8">
                    {statsData.map((stat, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex justify-between text-sm mb-2">
                                <span className={stat.future ? "text-cyan-400 font-bold" : "text-white/70"}>
                                    {stat.year}
                                </span>
                                <span className="text-white font-mono">₹{stat.value} Cr</span>
                            </div>
                            
                            {/* Bar Container */}
                            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                                {/* Animated Bar */}
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(stat.value / stat.max) * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: idx * 0.2, ease: "easeOut" }}
                                    className={`h-full rounded-full relative ${
                                        stat.future 
                                        ? "bg-gradient-to-r from-cyan-600 to-cyan-400" 
                                        : "bg-gradient-to-r from-blue-900 to-blue-600"
                                    }`}
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-white/40">
                    <Building2 className="w-3 h-3" />
                    Source: MarkNtel Advisors / Mordor Intelligence (2024 Analysis)
                </div>
            </div>

        </div>
    </section>
  );
}