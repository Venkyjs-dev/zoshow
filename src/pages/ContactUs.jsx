// import React from "react";
// import SendQuery from "../components/SendQuery";

// export default function ContactUs() {
//   return (
//     <section
//       id="contact"
//       className="py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
//       <div className="max-w-[120rem] mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-8">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-cyan-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}>
//               <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
//               <path d="M12 18h.01"></path>
//             </svg>
//             <span className="font-paragraph text-sm font-medium">
//               Get In Touch
//             </span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
//             Contact Us
//           </h2>
//           <p className="text-xl font-paragraph opacity-90 max-w-3xl mx-auto">
//             Ready to be part of ZoShow's digital advertising network? Get in
//             touch with us to learn more about our planned digital screen network
//             in Bangalore and Amaravathi.
//           </p>
//         </div>

//         {/* Cards + Form */}
//         <div className="flex flex-col lg:flex-row lg:items-start gap-12">
//           {/* Left Cards */}
//           <div className="flex-1 flex flex-col gap-8">
//             {/* Founder Card */}
//             {/*Note: Temporarly commented */}
//             {/* <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
//               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-white"
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
//               <div>
//                 <h3 className="text-xl font-heading font-semibold mb-2">
//                   Founders
//                 </h3>
//                 <p className="font-paragraph opacity-90">Anil (Founder)</p>
//                 <p className="font-paragraph opacity-90">Sudha (Co-founder)</p>
//               </div>
//             </div> */}

//             {/* Email Card */}
//             <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
//               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}>
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
//                   <path d="M2 12h20"></path>
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-heading font-semibold mb-2">
//                   Email
//                 </h3>
//                 <a
//                   href="mailto:ask@zoshow.in"
//                   className="font-paragraph text-cyan-300 hover:text-cyan-200 transition-colors duration-300">
//                   ask@zoshow.in
//                 </a>
//               </div>
//             </div>

//             {/* Phone Card */}
//             <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}>
//                   <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
//                   <path d="M12 18h.01"></path>
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-heading font-semibold mb-2">
//                   Phone
//                 </h3>
//                 <a
//                   href="tel:+917287843240"
//                   className="font-paragraph text-cyan-300 hover:text-cyan-200 transition-colors duration-300">
//                   +91 72878 43240
//                 </a>
//               </div>
//             </div>

//             {/* Headquarters Card */}
//             <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
//               <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}>
//                   <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
//                   <circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-heading font-semibold mb-2">
//                   Headquarters
//                 </h3>
//                 <p className="font-paragraph opacity-90">Bangalore, India</p>
//               </div>
//             </div>
//           </div>

//           {/* Right: Send Query Form */}
//           <div className="flex-1 lg:max-w-lg w-full">
//             <SendQuery />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactUs() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make sure you added VITE_EMAILJS_PUBLIC_KEY to your .env file!
      const SERVICE_ID = "my-zoshow-1780"; 
      const TEMPLATE_ID = "template_m2u09ta";
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "aRtTI61mHyNSDigFF"; // Fallback if env not set

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_requirements: formData.requirements,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", requirements: "" });
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#06b6d4', '#3b82f6'] });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Initialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Partnership</span>
            </h2>
            <p className="text-xl text-white/50 mb-12">
              Ready to deploy your campaign? Our network engineering team is ready to assist.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Email Protocol</h4>
                        <p className="text-white/50 hover:text-cyan-400 transition-colors cursor-pointer">ask@zoshow.in</p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                        <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Direct Line</h4>
                        <p className="text-white/50 hover:text-cyan-400 transition-colors cursor-pointer">+91 72878 43240</p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Headquarters</h4>
                        <p className="text-white/50">Bangalore, India</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Query</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Phone</label>
                        <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="+91..."
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Email Endpoint</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john@company.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Requirements</label>
                    <textarea 
                        name="requirements"
                        required
                        rows="4"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                        placeholder="Describe your campaign goals..."
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {loading ? "Transmitting..." : (
                        <>
                            Send Message <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
                
                {status === 'success' && (
                    <p className="text-green-400 text-center text-sm bg-green-400/10 py-2 rounded">Query Transmitted Successfully.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-center text-sm bg-red-400/10 py-2 rounded">Transmission Failed. Try again.</p>
                )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}