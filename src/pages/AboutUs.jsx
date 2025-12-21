// import React from "react";

// export default function AboutUs() {
//   return (
//     <section
//       id="about"
//       className="py-24 px-4 sm:px-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white"
//     >
//       <div className="max-w-[120rem] mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div>
//             {/* Header Badge */}
//             <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-8">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-cyan-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//               </svg>
//               <span className="font-paragraph text-sm font-medium">
//                 About ZoShow
//               </span>
//             </div>

//             {/* Main Title */}
//             <h2 className="text-5xl font-heading font-bold mb-8">
//               Leading Digital Advertising Innovation
//             </h2>

//             {/* Mission & Vision */}
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-2xl font-heading font-semibold mb-4 text-cyan-400">
//                   Our Mission
//                 </h3>
//                 <p className="font-paragraph text-lg opacity-90">
//                   To transform digital out-of-home advertising by building a
//                   premium network of digital screens in strategic locations,
//                   providing businesses with effective advertising solutions and
//                   comprehensive performance analytics.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-heading font-semibold mb-4 text-cyan-400">
//                   Our Vision
//                 </h3>
//                 <p className="font-paragraph text-lg opacity-90">
//                   To establish ZoShow as a leading digital advertising platform
//                   in India, starting with Bangalore and Amaravathi, and
//                   expanding to connect brands with their target audiences
//                   through strategic premium location partnerships.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Card */}
//           {/*Note: Temporarly commented */}
//           {/* <div className="text-center">
//             <div className="border text-foreground bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-2xl hover:scale-[1.02] transition-transform">
//               <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-heading font-semibold mb-4">
//                 Founded by Anil &amp; Sudha
//               </h3>
//               <p className="font-paragraph opacity-90">
//                 ZoShow was founded by Anil (Founder) and Sudha (Co-founder),
//                 entrepreneurs with a vision to transform digital advertising in
//                 India. Committed to building innovative solutions that connect
//                 brands with consumers through strategic technology deployment.
//               </p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Lightbulb, Flag, Rocket } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 px-6 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Future of Advertising</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-6 md:ml-0 space-y-16">
          
          {/* Item 1 */}
          <div className="relative pl-12 md:pl-24">
             <div className="absolute left-0 md:left-0 top-0 -translate-x-[50%] w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center z-10">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-3">The Vision</h3>
             <p className="text-white/60 text-lg leading-relaxed">
               Founded by entrepreneurs Anil and Sudha, ZoShow began with a simple question: Why is outdoor advertising still stuck in the 20th century? We envisioned a world where city walls are as smart as the phones in our pockets.
             </p>
          </div>

          {/* Item 2 */}
          <div className="relative pl-12 md:pl-24">
             <div className="absolute left-0 md:left-0 top-0 -translate-x-[50%] w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center z-10">
                <Flag className="w-5 h-5 text-cyan-500" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-3">The Mission</h3>
             <p className="text-white/60 text-lg leading-relaxed">
               To build India's largest intelligent screen network. We are starting with Bangalore and Amaravathi, transforming passive spaces into active engagement zones for brands and creators.
             </p>
          </div>

          {/* Item 3 */}
          <div className="relative pl-12 md:pl-24">
             <div className="absolute left-0 md:left-0 top-0 -translate-x-[50%] w-12 h-12 bg-[#050505] border border-cyan-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Rocket className="w-5 h-5 text-cyan-400" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-3">The Future</h3>
             <p className="text-white/60 text-lg leading-relaxed">
               We are scaling to 500+ premium screens. But screens are just the beginning. We are building the data layer that connects the physical world to the digital economy.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}