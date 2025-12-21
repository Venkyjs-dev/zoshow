// import { motion } from "framer-motion";
// import { Monitor, Target, BarChart3, MapPin, Cloud } from "lucide-react";

// const features = [
//   {
//     icon: <Monitor className="w-8 h-8 text-white" />,
//     title: "Digital Screen Network",
//     desc: "Network of 500+ premium digital screens across Bangalore & Amaravathi for maximum visibility.",
//     border: "from-blue-400 to-cyan-400",
//     iconBg: "from-blue-500 to-cyan-500",
//     hover: "hover:shadow-blue-400/50",
//   },
//   {
//     icon: <Target className="w-8 h-8 text-white" />,
//     title: "Targeted Advertising",
//     desc: "Deliver messages precisely with location, demographic and time-based targeting.",
//     border: "from-purple-400 to-indigo-400",
//     iconBg: "from-purple-500 to-indigo-500",
//     hover: "hover:shadow-purple-400/50",
//   },
//   {
//     icon: <BarChart3 className="w-8 h-8 text-white" />,
//     title: "Performance Analytics",
//     desc: "Comprehensive reporting and ROI tracking with detailed metrics.",
//     border: "from-green-400 to-teal-400",
//     iconBg: "from-green-500 to-teal-500",
//     hover: "hover:shadow-green-400/50",
//   },
//   {
//     icon: <MapPin className="w-8 h-8 text-white" />,
//     title: "Premium Locations",
//     desc: "Screens placed in high-traffic areas like malls, corporate hubs & commercial complexes.",
//     border: "from-orange-400 to-red-400",
//     iconBg: "from-orange-500 to-red-500",
//     hover: "hover:shadow-orange-400/50",
//   },
//   {
//     icon: <Cloud className="w-8 h-8 text-white" />,
//     title: "Scalable Platform",
//     desc: "Cloud-based infrastructure built for growth with enterprise-grade security.",
//     border: "from-indigo-400 to-purple-400",
//     iconBg: "from-indigo-500 to-purple-500",
//     hover: "hover:shadow-indigo-400/50",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section
//       id="services"
//       className="relative py-32 px-6 max-w-[120rem] mx-auto overflow-hidden"
//     >
//       {/* floating gradient blobs */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
//       </div>

//       {/* header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-20 relative z-10"
//       >
//         <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-blue-500/20 mb-6">
//           <Monitor className="h-5 w-5 text-blue-600" />
//           <span className="text-sm font-semibold text-blue-600">
//             Smart Contextual Advertising
//           </span>
//         </div>
//         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
//           Platform{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
//             Features
//           </span>
//         </h2>
//         <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
//           Essential capabilities for effective digital campaigns—analytics,
//           location targeting & scalable infrastructure for future growth.
//         </p>
//       </motion.div>

//       {/* feature cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         {features.map((f, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="group cursor-pointer"
//           >
//             <div
//               className={`
//                 relative overflow-hidden rounded-2xl p-[1px]
//                 bg-gradient-to-br ${f.border}
//                 shadow-sm transition-transform duration-500
//                 ${f.hover}
//               `}
//             >
//               {/* glass layer */}
//               <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col transition duration-300">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${f.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//                 >
//                   {f.icon}
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
//                   {f.title}
//                 </h3>
//                 <p className="text-lg text-gray-700/80 leading-relaxed mb-6">
//                   {f.desc}
//                 </p>
//                 <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
//                   <span className="text-sm font-medium text-gray-900">
//                     View Details
//                   </span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-gray-900"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="m12 5 7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA */}
//       {/*Note: Temporarly commented */}
//       {/* <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="mt-20 text-center relative z-10"
//       >
//         <div className="bg-white/70 backdrop-blur-xl border border-blue-200 p-10 rounded-2xl shadow-md inline-block">
//           <h3 className="text-3xl font-bold text-gray-900 mb-3">
//             Ready to Join Our Network?
//           </h3>
//           <p className="text-lg text-gray-700 mb-6">
//             Be among the first to advertise on our planned premium digital
//             screen network.
//           </p>
//           <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg transition-colors">
//             Request Demo
//           </button>
//         </div>
//       </motion.div> */}
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Map, BarChart3, Zap, ShieldCheck, Wifi, Eye } from "lucide-react";
import clsx from "clsx"; // Make sure to install: npm install clsx

// 1. Reusable Bento Card Component
const BentoCard = ({ title, desc, icon: Icon, className, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className={clsx(
      "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]",
      "hover:border-white/20 transition-colors duration-500",
      className
    )}
  >
    {/* Inner Glow Effect on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 p-8 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-white/50 leading-relaxed mb-6 flex-grow">
        {desc}
      </p>

      {/* Dynamic Children (Graphs, Maps, etc) */}
      <div className="mt-auto">
        {children}
      </div>
    </div>
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-black relative">
       {/* Section Header */}
       <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Infrastructure</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl border-l-4 border-cyan-500 pl-6">
            We don't just put up screens. We build intelligent advertising ecosystems powered by data.
          </p>
       </div>

      {/* Bento Grid Layout */}
      <div className="max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        
        {/* Card 1: Map Coverage (Large: spans 2 cols, 2 rows) */}
        <BentoCard
          title="Hyper-Local Network"
          desc="Strategic screen placement in high-density zones including Tech Parks, Malls, and Metro stations."
          icon={Map}
          className="md:col-span-2 md:row-span-2"
          delay={0.1}
        >
          <div className="w-full h-full min-h-[200px] bg-white/5 rounded-xl border border-white/5 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
            {/* Fake Map Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Pulsing Dots */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse"
                style={{ top: `${20 + i * 15}%`, left: `${30 + i * 10}%`, animationDelay: `${i * 0.5}s` }} 
              />
            ))}
          </div>
        </BentoCard>

        {/* Card 2: Analytics (Tall) */}
        <BentoCard
          title="Real-Time Analytics"
          desc="Live dashboard access to monitor impressions, dwell time, and audience demographics."
          icon={BarChart3}
          className="md:col-span-1 md:row-span-2"
          delay={0.2}
        >
          <div className="flex items-end justify-between h-32 gap-2 mt-4">
             {[40, 70, 45, 90, 65, 85].map((h, i) => (
               <div 
                 key={i} 
                 className="w-full bg-gradient-to-t from-cyan-900/50 to-cyan-500/50 rounded-t-sm"
                 style={{ height: `${h}%` }}
               />
             ))}
          </div>
        </BentoCard>

        {/* Card 3: Speed */}
        <BentoCard
          title="Instant Deployment"
          desc="Go live across 500+ screens in less than 15 minutes."
          icon={Zap}
          className="md:col-span-1 md:row-span-1"
          delay={0.3}
        />

        {/* Card 4: Security */}
        <BentoCard
          title="Brand Safety"
          desc="Enterprise-grade content filtering and proof of play."
          icon={ShieldCheck}
          className="md:col-span-1 md:row-span-1"
          delay={0.4}
        />
        
        {/* Card 5: Connectivity (Wide) */}
        <BentoCard
          title="4G/5G Enabled"
          desc="Always connected. Content updates happen over the air with zero downtime."
          icon={Wifi}
          className="md:col-span-2 md:row-span-1"
          delay={0.5}
        >
             <div className="h-2 w-full bg-white/10 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-cyan-500 w-2/3 animate-[shimmer_2s_infinite] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                </div>
             </div>
        </BentoCard>
        
        {/* Card 6: AI Vision */}
        <BentoCard
            title="Computer Vision"
            desc="AI cameras detect audience mood and engagement."
            icon={Eye}
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-900/20 to-black"
            delay={0.6}
        />

      </div>
    </section>
  );
}