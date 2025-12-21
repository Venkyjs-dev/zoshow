// import React, { useState, useMemo } from "react";
// import { Link } from "react-router-dom"; 
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Search, MapPin, Monitor, Users, CheckCircle2, Plus, 
//   ArrowRight, SlidersHorizontal, ChevronDown, Filter, X, 
//   Layers, Wallet, Grid3X3 
// } from "lucide-react";

// import BookingModal from "../components/BookingModal"; 

// // --- DATA: KARNATAKA & TELANGANA ONLY ---
// const rawSlotsData = [
//   {
//     id: 1, title: "Phoenix Marketcity",
//     state: "Karnataka", city: "Bangalore", area: "Whitefield",
//     type: "Mall", screens: 22, reach: "200k", price: "₹18,000/day", availability: 12,
//     image: "https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?auto=format&fit=crop&w=400&q=80",
//     priceValue: 18000, audienceTier: "Affluent Professionals", segment: "Premium Living"
//   },
//   {
//     id: 2, title: "WeWork Galaxy",
//     state: "Karnataka", city: "Bangalore", area: "Residency Road",
//     type: "Coworking", screens: 6, reach: "5k", price: "₹8,500/day", availability: 92,
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
//     priceValue: 8500, audienceTier: "High-Net-Worth", segment: "Urban Transit"
//   },
//   {
//     id: 3, title: "Amaravathi Tech Park",
//     state: "Telangana", city: "Amaravathi", area: "Capital Region",
//     type: "Commercial", screens: 15, reach: "50k", price: "₹12,000/day", availability: 65,
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
//     priceValue: 12000, audienceTier: "Affluent Professionals", segment: "Urban Transit"
//   },
//   {
//     id: 4, title: "Capital High Street",
//     state: "Telangana", city: "Amaravathi", area: "City Center",
//     type: "Retail", screens: 10, reach: "30k", price: "₹10,000/day", availability: 45,
//     image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
//     priceValue: 10000, audienceTier: "High-Net-Worth", segment: "Premium Living"
//   },
//   {
//     id: 5, title: "Cult.fit Indiranagar",
//     state: "Karnataka", city: "Bangalore", area: "Indiranagar",
//     type: "Fitness", screens: 4, reach: "2k", price: "₹5,000/day", availability: 88,
//     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
//     priceValue: 5000, audienceTier: "Ultra-High-Net-Worth", segment: "Elite Fitness"
//   },
// ];

// const states = [...new Set(rawSlotsData.map(item => item.state))];

// // --- RING COMPONENT ---
// const AvailabilityRing = ({ percentage }) => {
//   const radius = 18; const circumference = 2 * Math.PI * radius; const strokeDashoffset = circumference - (percentage / 100) * circumference;
//   let color = "text-green-500"; if (percentage < 30) color = "text-red-500"; else if (percentage < 60) color = "text-yellow-500";
//   return (
//     <div className="relative w-12 h-12 flex items-center justify-center">
//       <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
//         <circle cx="22" cy="22" r={radius} className="fill-none stroke-white/10" strokeWidth="3" />
//         <circle cx="22" cy="22" r={radius} className={`fill-none ${color} transition-all duration-1000 ease-out`} strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
//       </svg>
//       <span className={`absolute text-[9px] font-bold ${color}`}>{percentage}%</span>
//     </div>
//   );
// };

// export default function InventoryBrowser() {
//   const [activeSlot, setActiveSlot] = useState(null);
//   const [selectedSlots, setSelectedSlots] = useState([]);
  
//   // --- FILTERS ---
//   const [filters, setFilters] = useState({
//     state: "All", city: "All", area: "All", budget: 100000, minScreens: 1, audienceTier: "All", segment: "All"
//   });

//   // Toggle selection (Basic)
//   const toggleSlot = (id) => {
//     setSelectedSlots(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
//   };

//   // --- NEW: Handle Modal Confirmation ---
//   const handleModalConfirm = (cartItems) => {
//     if (activeSlot && !selectedSlots.includes(activeSlot.id)) {
//         // Add location ID to selected list (Simulating clicking the + button)
//         toggleSlot(activeSlot.id);
//     }
//     setActiveSlot(null); // Close modal
//   };

//   // --- FILTER LOGIC ---
//   const availableCities = useMemo(() => {
//     if (filters.state === "All") return [];
//     return [...new Set(rawSlotsData.filter(item => item.state === filters.state).map(item => item.city))];
//   }, [filters.state]);

//   const availableAreas = useMemo(() => {
//     if (filters.city === "All") return [];
//     return [...new Set(rawSlotsData.filter(item => item.city === filters.city).map(item => item.area))];
//   }, [filters.city]);

//   const filteredSlots = useMemo(() => {
//     return rawSlotsData.filter(slot => {
//       if (filters.state !== "All" && slot.state !== filters.state) return false;
//       if (filters.city !== "All" && slot.city !== filters.city) return false;
//       if (filters.area !== "All" && slot.area !== filters.area) return false;
//       if (slot.priceValue > filters.budget) return false;
//       if (slot.screens < filters.minScreens) return false;
//       if (filters.audienceTier !== "All" && slot.audienceTier !== filters.audienceTier) return false;
//       if (filters.segment !== "All" && slot.segment !== filters.segment) return false;
//       return true;
//     });
//   }, [filters]);

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({
//       ...prev, [key]: value,
//       ...(key === 'state' && { city: 'All', area: 'All' }),
//       ...(key === 'city' && { area: 'All' })
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 relative">
      
//       {/* Background */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
//       </div>

//       {/* --- MODAL (With Confirm Handler) --- */}
//       <BookingModal 
//         isOpen={!!activeSlot} 
//         onClose={() => setActiveSlot(null)} 
//         slot={activeSlot} 
//         onConfirm={handleModalConfirm} 
//       />

//       <div className="relative z-10 max-w-[100rem] mx-auto px-4 md:px-6 pt-32 pb-32">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4 backdrop-blur-md">
//               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
//               <span className="text-[10px] font-medium text-white/70 uppercase tracking-widest">Live Inventory</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">Explore Network</h1>
//           </div>
//           <div className="relative w-full md:w-96 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center px-4 py-3">
//              <Search className="w-5 h-5 text-white/30 mr-3" />
//              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-white w-full text-sm" />
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* --- SIDEBAR FILTERS --- */}
//           <aside className="lg:w-80 flex-shrink-0 space-y-6">
//             <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              
//               <div className="flex items-center justify-between mb-8">
//                 <h3 className="font-bold text-xl text-white">Filter Inventory</h3>
//                 <button onClick={() => setFilters({state:'All', city:'All', area:'All', budget:100000, minScreens:1, audienceTier:'All', segment:'All'})} className="text-xs text-cyan-400 hover:text-white transition-colors">Reset</button>
//               </div>

//               {/* Location */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-2 text-sm font-bold text-white mb-2"><MapPin className="w-4 h-4 text-cyan-400" /> Location</div>
                
//                 {/* State */}
//                 <div>
//                     <label className="text-[10px] text-white/40 uppercase font-bold mb-1 block">State</label>
//                     <div className="relative">
//                         <select value={filters.state} onChange={(e) => handleFilterChange('state', e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm outline-none text-white focus:border-cyan-500">
//                             <option value="All" className="bg-[#111]">All States</option>
//                             {states.map(s => <option key={s} value={s}>{s}</option>)}
//                         </select>
//                         <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-white/30 pointer-events-none" />
//                     </div>
//                 </div>

//                 {/* City */}
//                 <div>
//                     <label className="text-[10px] text-white/40 uppercase font-bold mb-1 block">City</label>
//                     <div className="relative">
//                         <select value={filters.city} onChange={(e) => handleFilterChange('city', e.target.value)} disabled={filters.state === "All"} className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm outline-none text-white disabled:opacity-50">
//                             <option value="All" className="bg-[#111]">Select City</option>
//                             {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
//                         </select>
//                         <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-white/30 pointer-events-none" />
//                     </div>
//                 </div>

//                 {/* Area */}
//                 <div>
//                     <label className="text-[10px] text-white/40 uppercase font-bold mb-1 block">Area</label>
//                     <div className="relative">
//                         <select value={filters.area} onChange={(e) => handleFilterChange('area', e.target.value)} disabled={filters.city === "All"} className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm outline-none text-white disabled:opacity-50">
//                             <option value="All" className="bg-[#111]">Select Area</option>
//                             {availableAreas.map(a => <option key={a} value={a}>{a}</option>)}
//                         </select>
//                         <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-white/30 pointer-events-none" />
//                     </div>
//                 </div>
//               </div>

//               <div className="h-px bg-white/10 mb-8" />

//               {/* Budget */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-2 text-sm font-bold text-white mb-2"><Wallet className="w-4 h-4 text-cyan-400" /> Budget Range</div>
//                 <div className="flex justify-between text-xs text-white/50 mb-2"><span>Min: ₹5K</span><span>Max: ₹100K</span></div>
//                 <input type="range" min="5000" max="100000" step="5000" value={filters.budget} onChange={(e) => handleFilterChange('budget', parseInt(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
//                 <div className="text-right text-xs text-cyan-400 font-mono">Max: ₹{filters.budget.toLocaleString()}</div>
//               </div>

//               {/* Screens */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-2 text-sm font-bold text-white mb-2"><Grid3X3 className="w-4 h-4 text-cyan-400" /> Minimum Screens</div>
//                 <div className="flex justify-between text-xs text-white/50 mb-2"><span>Screens: {filters.minScreens}</span></div>
//                 <input type="range" min="1" max="20" step="1" value={filters.minScreens} onChange={(e) => handleFilterChange('minScreens', parseInt(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
//               </div>

//               <div className="h-px bg-white/10 mb-8" />

//               {/* Audience */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-2 text-sm font-bold text-white mb-4"><Users className="w-4 h-4 text-cyan-400" /> Audience Tier</div>
//                 {[{ id: "Ultra-High-Net-Worth", label: "Ultra-High-Net-Worth", sub: ">$5M net worth" }, { id: "High-Net-Worth", label: "High-Net-Worth", sub: "$1-5M net worth" }, { id: "Affluent Professionals", label: "Affluent Professionals", sub: "$500K-1M income" }].map((tier) => (
//                     <label key={tier.id} className="flex items-start gap-3 cursor-pointer group">
//                         <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${filters.audienceTier === tier.id ? "border-cyan-500" : "border-white/30 group-hover:border-white"}`}>
//                             {filters.audienceTier === tier.id && <div className="w-2 h-2 rounded-full bg-cyan-500" />}
//                         </div>
//                         <input type="radio" name="audience" className="hidden" checked={filters.audienceTier === tier.id} onChange={() => handleFilterChange('audienceTier', filters.audienceTier === tier.id ? "All" : tier.id)} />
//                         <div><div className={`text-sm font-medium transition-colors ${filters.audienceTier === tier.id ? "text-cyan-400" : "text-white/80 group-hover:text-white"}`}>{tier.label}</div><div className="text-[10px] text-white/40">{tier.sub}</div></div>
//                     </label>
//                 ))}
//               </div>

//               {/* Segment */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-2 text-sm font-bold text-white mb-4"><Layers className="w-4 h-4 text-cyan-400" /> Segment</div>
//                 {["Premium Living", "Elite Fitness", "Urban Transit"].map((seg) => (
//                     <label key={seg} className="flex items-center gap-3 cursor-pointer group">
//                         <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.segment === seg ? "border-cyan-500 bg-cyan-500/20" : "border-white/30 group-hover:border-white"}`}>
//                             {filters.segment === seg && <CheckCircle2 className="w-3 h-3 text-cyan-500" />}
//                         </div>
//                         <input type="checkbox" className="hidden" checked={filters.segment === seg} onChange={() => handleFilterChange('segment', filters.segment === seg ? "All" : seg)} />
//                         <span className={`text-sm transition-colors ${filters.segment === seg ? "text-cyan-400" : "text-white/80 group-hover:text-white"}`}>{seg}</span>
//                     </label>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* --- MAIN GRID --- */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {filteredSlots.length > 0 ? (
//                     filteredSlots.map((slot) => {
//                         const isSelected = selectedSlots.includes(slot.id);
//                         return (
//                             <motion.div
//                                 key={slot.id}
//                                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//                                 className={`group relative bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 ${isSelected ? "border-cyan-500 shadow-lg" : "border-white/10 hover:border-white/20"}`}
//                             >
//                                 {/* Image */}
//                                 <div className="relative h-48 overflow-hidden">
//                                     <img src={slot.image} alt={slot.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
//                                     <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase font-bold text-white border border-white/10">{slot.type}</div>
//                                     <button onClick={() => toggleSlot(slot.id)} className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-md transition-all ${isSelected ? "bg-cyan-500 border-cyan-500 text-black" : "bg-black/40 border-white/20 text-white hover:bg-white hover:text-black"}`}>
//                                         {isSelected ? <CheckCircle2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
//                                     </button>
//                                 </div>

//                                 {/* Content */}
//                                 <div className="p-5">
//                                     <div className="flex justify-between items-start mb-4">
//                                         <div>
//                                             <h3 className="text-lg font-bold text-white leading-tight mb-1">{slot.title}</h3>
//                                             <div className="flex items-center gap-1 text-xs text-white/50"><MapPin className="w-3 h-3" /> {slot.area}, {slot.city}</div>
//                                         </div>
//                                         <AvailabilityRing percentage={slot.availability} />
//                                     </div>
                                    
//                                     <div className="grid grid-cols-2 gap-4 text-sm mb-4 border-t border-white/5 pt-4">
//                                         <div><div className="text-[10px] text-white/40 uppercase">Screens</div><div className="flex items-center gap-1 text-white"><Monitor className="w-3 h-3 text-cyan-500"/> {slot.screens} Digital</div></div>
//                                         <div><div className="text-[10px] text-white/40 uppercase">Daily Reach</div><div className="flex items-center gap-1 text-white"><Users className="w-3 h-3 text-purple-500"/> {slot.reach}</div></div>
//                                     </div>

//                                     <div className="flex justify-between items-center pt-4 border-t border-white/5">
//                                         <div><div className="text-[10px] text-white/40">From</div><div className="text-lg font-bold text-white">{slot.price}</div></div>
//                                         <button onClick={() => setActiveSlot(slot)} className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-cyan-400 transition-all">Check Availability</button>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         );
//                     })
//                 ) : (
//                     <div className="col-span-full h-64 flex flex-col items-center justify-center text-white/30">
//                         <p>No locations match filters.</p>
//                         <button onClick={() => setFilters({state:'All', city:'All', area:'All', budget:100000, minScreens:1, audienceTier:'All', segment:'All'})} className="mt-4 text-cyan-400 hover:underline">Reset Filters</button>
//                     </div>
//                 )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Dock */}
//       <AnimatePresence>
//         {selectedSlots.length > 0 && (
//           <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
//             <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] p-2 pl-6 pr-2 flex items-center gap-8 max-w-xl w-full">
//               <div className="flex-1 text-sm text-white font-medium"><span className="font-bold">{selectedSlots.length} Locations</span> Selected</div>
//               <Link to="/booking" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
//                 Configure Campaign <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, MapPin, Monitor, Users, CheckCircle2, Plus, 
  ArrowRight, SlidersHorizontal, ChevronDown, Filter, X, 
  Layers, Wallet, Grid3X3 
} from "lucide-react";

import BookingModal from "../components/BookingModal"; 
// 1. IMPORT CONTEXT
import { useBooking } from "../context/BookingContext";

// --- ENHANCED DATA FOR FILTERS ---
const rawSlotsData = [
  {
    id: 1, title: "Phoenix Marketcity",
    state: "Karnataka", city: "Bangalore", area: "Whitefield",
    type: "Mall", screens: 22, reach: "200k", price: "₹18,000/day", availability: 12,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?auto=format&fit=crop&w=400&q=80",
    priceValue: 18000, audienceTier: "Affluent Professionals", segment: "Premium Living"
  },
  {
    id: 2, title: "WeWork Galaxy",
    state: "Karnataka", city: "Bangalore", area: "Residency Road",
    type: "Coworking", screens: 6, reach: "5k", price: "₹8,500/day", availability: 92,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    priceValue: 8500, audienceTier: "High-Net-Worth", segment: "Urban Transit"
  },
  {
    id: 3, title: "Amaravathi Tech Park",
    state: "Telangana", city: "Amaravathi", area: "Capital Region",
    type: "Commercial", screens: 15, reach: "50k", price: "₹12,000/day", availability: 65,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    priceValue: 12000, audienceTier: "Affluent Professionals", segment: "Urban Transit"
  },
  {
    id: 4, title: "Capital High Street",
    state: "Telangana", city: "Amaravathi", area: "City Center",
    type: "Retail", screens: 10, reach: "30k", price: "₹10,000/day", availability: 45,
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
    priceValue: 10000, audienceTier: "High-Net-Worth", segment: "Premium Living"
  },
  {
    id: 5, title: "Cult.fit Indiranagar",
    state: "Karnataka", city: "Bangalore", area: "Indiranagar",
    type: "Fitness", screens: 4, reach: "2k", price: "₹5,000/day", availability: 88,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    priceValue: 5000, audienceTier: "Ultra-High-Net-Worth", segment: "Elite Fitness"
  },
];

const states = [...new Set(rawSlotsData.map(item => item.state))];

const AvailabilityRing = ({ percentage }) => {
  const radius = 18; const circumference = 2 * Math.PI * radius; const strokeDashoffset = circumference - (percentage / 100) * circumference;
  let color = "text-green-500"; if (percentage < 30) color = "text-red-500"; else if (percentage < 60) color = "text-yellow-500";
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={radius} className="fill-none stroke-white/10" strokeWidth="3" />
        <circle cx="22" cy="22" r={radius} className={`fill-none ${color} transition-all duration-1000 ease-out`} strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
      </svg>
      <span className={`absolute text-[9px] font-bold ${color}`}>{percentage}%</span>
    </div>
  );
};

export default function InventoryBrowser() {
  const [activeSlot, setActiveSlot] = useState(null);
  
  // 2. USE CONTEXT instead of local state
  const { cart, addToCart, removeFromCart } = useBooking();
  
  // Filters State
  const [filters, setFilters] = useState({
    state: "All", city: "All", area: "All", budget: 100000, minScreens: 1, audienceTier: "All", segment: "All"
  });

  // 3. HELPER: Check if slot is in cart
  const isSelected = (id) => cart.some(item => item.id === id);

  // 4. LOGIC: Toggle Slot (Quick Select)
  const toggleSlot = (slot) => {
    if (isSelected(slot.id)) {
        removeFromCart(slot.id);
    } else {
        addToCart(slot); // Adds with default config
    }
  };

  // 5. LOGIC: Handle Modal Confirmation
  const handleModalConfirm = (modalConfig) => {
    if (activeSlot) {
        // Add to cart with the specific dates/times chosen in modal
        // We pass 'modalConfig' (the cart from the modal) as extra data
        addToCart({ ...activeSlot, configuration: modalConfig });
    }
    setActiveSlot(null); // Close modal
  };

  // --- FILTER LOGIC (unchanged) ---
  const availableCities = useMemo(() => {
    if (filters.state === "All") return [];
    return [...new Set(rawSlotsData.filter(item => item.state === filters.state).map(item => item.city))];
  }, [filters.state]);

  const availableAreas = useMemo(() => {
    if (filters.city === "All") return [];
    return [...new Set(rawSlotsData.filter(item => item.city === filters.city).map(item => item.area))];
  }, [filters.city]);

  const filteredSlots = useMemo(() => {
    return rawSlotsData.filter(slot => {
      if (filters.state !== "All" && slot.state !== filters.state) return false;
      if (filters.city !== "All" && slot.city !== filters.city) return false;
      if (filters.area !== "All" && slot.area !== filters.area) return false;
      if (slot.priceValue > filters.budget) return false;
      if (slot.screens < filters.minScreens) return false;
      if (filters.audienceTier !== "All" && slot.audienceTier !== filters.audienceTier) return false;
      if (filters.segment !== "All" && slot.segment !== filters.segment) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev, [key]: value,
      ...(key === 'state' && { city: 'All', area: 'All' }),
      ...(key === 'city' && { area: 'All' })
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 relative">
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      {/* --- MODAL (Pass handleModalConfirm) --- */}
      <BookingModal 
        isOpen={!!activeSlot} 
        onClose={() => setActiveSlot(null)} 
        slot={activeSlot} 
        onConfirm={handleModalConfirm} 
      />

      <div className="relative z-10 max-w-[100rem] mx-auto px-4 md:px-6 pt-32 pb-32">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-medium text-white/70 uppercase tracking-widest">Live Inventory</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">Explore Network</h1>
          </div>
          <div className="relative w-full md:w-96 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center px-4 py-3">
             <Search className="w-5 h-5 text-white/30 mr-3" />
             <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-white w-full text-sm" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- SIDEBAR FILTERS --- */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl text-white">Filter Inventory</h3>
                <button onClick={() => setFilters({state:'All', city:'All', area:'All', budget:100000, minScreens:1, audienceTier:'All', segment:'All'})} className="text-xs text-cyan-400 hover:text-white transition-colors">Reset</button>
              </div>

              {/* Location */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2"><MapPin className="w-4 h-4 text-cyan-400" /> Location</div>
                
                {/* State */}
                <div>
                    <label className="text-[10px] text-white/40 uppercase font-bold mb-1 block">State</label>
                    <div className="relative">
                        <select value={filters.state} onChange={(e) => handleFilterChange('state', e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm outline-none text-white focus:border-cyan-500">
                            <option value="All" className="bg-[#111]">All States</option>
                            {states.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                </div>

                {/* City */}
                <div>
                    <label className="text-[10px] text-white/40 uppercase font-bold mb-1 block">City</label>
                    <div className="relative">
                        <select value={filters.city} onChange={(e) => handleFilterChange('city', e.target.value)} disabled={filters.state === "All"} className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm outline-none text-white disabled:opacity-50">
                            <option value="All" className="bg-[#111]">Select City</option>
                            {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                </div>

                {/* Area */}
                <div>
                    <label className="text-[10px] text-white/40 uppercase font-bold mb-1 block">Area</label>
                    <div className="relative">
                        <select value={filters.area} onChange={(e) => handleFilterChange('area', e.target.value)} disabled={filters.city === "All"} className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm outline-none text-white disabled:opacity-50">
                            <option value="All" className="bg-[#111]">Select Area</option>
                            {availableAreas.map(a => <option key={a} value={a}>{a}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                </div>
              </div>

              <div className="h-px bg-white/10 mb-8" />

              {/* Budget */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2"><Wallet className="w-4 h-4 text-cyan-400" /> Budget Range</div>
                <div className="flex justify-between text-xs text-white/50 mb-2"><span>Min: ₹5K</span><span>Max: ₹100K</span></div>
                <input type="range" min="5000" max="100000" step="5000" value={filters.budget} onChange={(e) => handleFilterChange('budget', parseInt(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                <div className="text-right text-xs text-cyan-400 font-mono">Max: ₹{filters.budget.toLocaleString()}</div>
              </div>

              {/* Screens */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2"><Grid3X3 className="w-4 h-4 text-cyan-400" /> Minimum Screens</div>
                <div className="flex justify-between text-xs text-white/50 mb-2"><span>Screens: {filters.minScreens}</span></div>
                <input type="range" min="1" max="20" step="1" value={filters.minScreens} onChange={(e) => handleFilterChange('minScreens', parseInt(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
              </div>

              <div className="h-px bg-white/10 mb-8" />

              {/* Audience */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-4"><Users className="w-4 h-4 text-cyan-400" /> Audience Tier</div>
                {[{ id: "Ultra-High-Net-Worth", label: "Ultra-High-Net-Worth", sub: ">$5M net worth" }, { id: "High-Net-Worth", label: "High-Net-Worth", sub: "$1-5M net worth" }, { id: "Affluent Professionals", label: "Affluent Professionals", sub: "$500K-1M income" }].map((tier) => (
                    <label key={tier.id} className="flex items-start gap-3 cursor-pointer group">
                        <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${filters.audienceTier === tier.id ? "border-cyan-500" : "border-white/30 group-hover:border-white"}`}>
                            {filters.audienceTier === tier.id && <div className="w-2 h-2 rounded-full bg-cyan-500" />}
                        </div>
                        <input type="radio" name="audience" className="hidden" checked={filters.audienceTier === tier.id} onChange={() => handleFilterChange('audienceTier', filters.audienceTier === tier.id ? "All" : tier.id)} />
                        <div><div className={`text-sm font-medium transition-colors ${filters.audienceTier === tier.id ? "text-cyan-400" : "text-white/80 group-hover:text-white"}`}>{tier.label}</div><div className="text-[10px] text-white/40">{tier.sub}</div></div>
                    </label>
                ))}
              </div>

              {/* Segment */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-4"><Layers className="w-4 h-4 text-cyan-400" /> Segment</div>
                {["Premium Living", "Elite Fitness", "Urban Transit"].map((seg) => (
                    <label key={seg} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.segment === seg ? "border-cyan-500 bg-cyan-500/20" : "border-white/30 group-hover:border-white"}`}>
                            {filters.segment === seg && <CheckCircle2 className="w-3 h-3 text-cyan-500" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={filters.segment === seg} onChange={() => handleFilterChange('segment', filters.segment === seg ? "All" : seg)} />
                        <span className={`text-sm transition-colors ${filters.segment === seg ? "text-cyan-400" : "text-white/80 group-hover:text-white"}`}>{seg}</span>
                    </label>
                ))}
              </div>
            </div>
          </aside>

          {/* --- MAIN GRID --- */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredSlots.length > 0 ? (
                    filteredSlots.map((slot) => {
                        // 6. Check from Global State
                        const selected = isSelected(slot.id); 
                        return (
                            <motion.div
                                key={slot.id}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                className={`group relative bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 ${selected ? "border-cyan-500 shadow-lg" : "border-white/10 hover:border-white/20"}`}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={slot.image} alt={slot.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase font-bold text-white border border-white/10">{slot.type}</div>
                                    
                                    {/* 7. Pass FULL SLOT to toggle */}
                                    <button onClick={() => toggleSlot(slot)} className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-md transition-all ${selected ? "bg-cyan-500 border-cyan-500 text-black" : "bg-black/40 border-white/20 text-white hover:bg-white hover:text-black"}`}>
                                        {selected ? <CheckCircle2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white leading-tight mb-1">{slot.title}</h3>
                                            <div className="flex items-center gap-1 text-xs text-white/50"><MapPin className="w-3 h-3" /> {slot.area}, {slot.city}</div>
                                        </div>
                                        <AvailabilityRing percentage={slot.availability} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm mb-4 border-t border-white/5 pt-4">
                                        <div><div className="text-[10px] text-white/40 uppercase">Screens</div><div className="flex items-center gap-1 text-white"><Monitor className="w-3 h-3 text-cyan-500"/> {slot.screens} Digital</div></div>
                                        <div><div className="text-[10px] text-white/40 uppercase">Daily Reach</div><div className="flex items-center gap-1 text-white"><Users className="w-3 h-3 text-purple-500"/> {slot.reach}</div></div>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <div><div className="text-[10px] text-white/40">From</div><div className="text-lg font-bold text-white">{slot.price}</div></div>
                                        <button onClick={() => setActiveSlot(slot)} className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-cyan-400 transition-all">Check Availability</button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="col-span-full h-64 flex flex-col items-center justify-center text-white/30">
                        <p>No locations match filters.</p>
                        <button onClick={() => setFilters({state:'All', city:'All', area:'All', budget:100000, minScreens:1, audienceTier:'All', segment:'All'})} className="mt-4 text-cyan-400 hover:underline">Reset Filters</button>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {/* 8. Use 'cart.length' instead of 'selectedSlots.length' */}
        {cart.length > 0 && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] p-2 pl-6 pr-2 flex items-center gap-8 max-w-xl w-full">
              <div className="flex-1 text-sm text-white font-medium"><span className="font-bold">{cart.length} Locations</span> Selected</div>
              <Link to="/booking" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                Configure Campaign <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}