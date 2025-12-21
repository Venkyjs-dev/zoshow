// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle2, Monitor } from "lucide-react";

// // // // --- SUB-COMPONENT: CIRCULAR DATE RING ---
// // // const DateRing = ({ date, totalSlots, bookedSlots, isSelected, onClick }) => {
// // //   const bookedPercentage = (bookedSlots / totalSlots) * 100;
  
// // //   // SVG Config
// // //   const radius = 16; // Slightly smaller for better fit
// // //   const circumference = 2 * Math.PI * radius;
// // //   const strokeDashoffset = circumference - (bookedPercentage / 100) * circumference;

// // //   // Color Logic: Green (<50%), Yellow (50-80%), Red (>80%)
// // //   let color = "stroke-green-500"; 
// // //   if (bookedPercentage > 80) color = "stroke-red-500";
// // //   else if (bookedPercentage > 50) color = "stroke-yellow-500";

// // //   if (isSelected) color = "stroke-cyan-400 drop-shadow-[0_0_5px_cyan]";

// // //   return (
// // //     <button 
// // //       onClick={onClick}
// // //       className={`relative w-12 h-14 flex flex-col items-center justify-center group transition-all duration-300 ${isSelected ? "scale-110 z-10" : "hover:scale-105"}`}
// // //     >
// // //       <div className="relative w-10 h-10">
// // //         <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 40 40">
// // //           {/* Track */}
// // //           <circle cx="20" cy="20" r={radius} className="fill-none stroke-white/10" strokeWidth="2.5" />
// // //           {/* Progress */}
// // //           <circle 
// // //             cx="20" cy="20" r={radius} 
// // //             className={`fill-none transition-all duration-500 ${color}`} 
// // //             strokeWidth="2.5" 
// // //             strokeDasharray={circumference}
// // //             strokeDashoffset={strokeDashoffset}
// // //             strokeLinecap="round"
// // //           />
// // //         </svg>
// // //         <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>
// // //           {date}
// // //         </span>
// // //       </div>
// // //     </button>
// // //   );
// // // };

// // // export default function BookingModal({ isOpen, onClose, slot }) {
// // //   const [selectedDates, setSelectedDates] = useState([]);

// // //   if (!isOpen || !slot) return null;

// // //   const toggleDate = (date) => {
// // //     setSelectedDates(prev => 
// // //       prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
// // //     );
// // //   };

// // //   // Generate 28 days for demo
// // //   const calendarData = Array.from({ length: 28 }, (_, i) => ({
// // //     date: i + 1, 
// // //     total: 20, 
// // //     booked: Math.floor(Math.random() * 18) 
// // //   }));

// // //   return (
// // //     <AnimatePresence>
// // //       <motion.div 
// // //         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // //         className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
// // //       >
// // //         <motion.div 
// // //           initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
// // //           className="bg-[#0b0b0b] border border-white/10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
// // //         >
// // //             {/* Left Side: Info */}
// // //             <div className="w-full md:w-1/3 bg-white/5 p-6 flex flex-col border-b md:border-r border-white/10">
// // //                 <img src={slot.image} alt="" className="w-full h-32 object-cover rounded-lg mb-4 border border-white/10"/>
// // //                 <h2 className="text-xl font-bold text-white mb-1">{slot.title}</h2>
// // //                 <p className="text-white/50 text-xs mb-4 flex items-center gap-1"><MapPin className="w-3 h-3"/> {slot.location}</p>
                
// // //                 <div className="mt-auto">
// // //                     <div className="flex justify-between text-sm mb-4">
// // //                         <span className="text-white/40">Selected Days</span>
// // //                         <span className="text-cyan-400 font-bold">{selectedDates.length}</span>
// // //                     </div>
// // //                     <Link to="/booking">
// // //                         <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
// // //                             Confirm & Book <CheckCircle2 className="w-4 h-4" />
// // //                         </button>
// // //                     </Link>
// // //                 </div>
// // //             </div>

// // //             {/* Right Side: Calendar */}
// // //             <div className="flex-1 p-6 bg-[#050505] relative overflow-y-auto">
// // //                 <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20"><X className="w-4 h-4 text-white"/></button>
                
// // //                 <div className="flex items-center justify-between mb-6">
// // //                     <h3 className="text-lg font-bold text-white">Select Dates</h3>
// // //                     <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
// // //                         <ChevronLeft className="w-4 h-4"/> <span className="text-xs font-mono">Jan 2025</span> <ChevronRight className="w-4 h-4"/>
// // //                     </div>
// // //                 </div>

// // //                 <div className="grid grid-cols-7 gap-2">
// // //                     {['M','T','W','T','F','S','S'].map((d, i) => (
// // //                         <div key={i} className="text-center text-[10px] text-white/30 font-bold mb-2">{d}</div>
// // //                     ))}
// // //                     {calendarData.map((day) => (
// // //                         <div key={day.date} className="flex justify-center">
// // //                             <DateRing 
// // //                                 date={day.date} totalSlots={day.total} bookedSlots={day.booked}
// // //                                 isSelected={selectedDates.includes(day.date)}
// // //                                 onClick={() => toggleDate(day.date)}
// // //                             />
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </motion.div>
// // //       </motion.div>
// // //     </AnimatePresence>
// // //   );
// // // }


// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle2, Monitor, Clock } from "lucide-react";

// // // --- SUB-COMPONENT: TIME SLOT SELECTOR ---
// // const TimeSlotGrid = ({ date, onSelect, selectedSlots }) => {
// //   const timeSlots = [
// //     { id: "morn", label: "Morning", time: "06:00 - 12:00", price: "₹2,000" },
// //     { id: "aft", label: "Afternoon", time: "12:00 - 16:00", price: "₹1,500" },
// //     { id: "eve", label: "Prime Time", time: "16:00 - 22:00", price: "₹5,000" }, 
// //     { id: "night", label: "Late Night", time: "22:00 - 06:00", price: "₹1,000" },
// //   ];

// //   return (
// //     <div className="mt-6 animate-fadeIn">
// //       <h4 className="text-sm font-bold text-white mb-3 flex justify-between items-center">
// //         <span>Slots for <span className="text-cyan-400">Jan {date}</span></span>
// //         <span className="text-[9px] bg-white/10 px-2 py-1 rounded text-white/50 uppercase tracking-wider">Multi-Select</span>
// //       </h4>
// //       <div className="grid grid-cols-2 gap-3">
// //         {timeSlots.map((slot) => {
// //           const isSelected = selectedSlots.some(s => s.date === date && s.slotId === slot.id);
// //           return (
// //             <button
// //               key={slot.id}
// //               onClick={() => onSelect(date, slot)}
// //               className={`
// //                 flex flex-col items-start p-3 rounded-xl border text-left transition-all
// //                 ${isSelected 
// //                   ? "bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
// //                   : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"}
// //               `}
// //             >
// //               <div className="flex justify-between w-full mb-1">
// //                 <span className={`text-xs font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>{slot.label}</span>
// //                 {isSelected && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
// //               </div>
// //               <span className="text-[10px] text-white/50 mb-2">{slot.time}</span>
// //               <span className="text-xs font-mono font-medium text-white">{slot.price}</span>
// //             </button>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // // --- SUB-COMPONENT: CIRCULAR DATE RING ---
// // const DateRing = ({ date, totalSlots, bookedSlots, isSelected, onClick }) => {
// //   const bookedPercentage = (bookedSlots / totalSlots) * 100;
// //   const radius = 18;
// //   const circumference = 2 * Math.PI * radius;
// //   const strokeDashoffset = circumference - (bookedPercentage / 100) * circumference;

// //   let color = "stroke-emerald-500"; 
// //   if (bookedPercentage > 80) color = "stroke-rose-500";
// //   else if (bookedPercentage > 50) color = "stroke-amber-500";
  
// //   if (isSelected) color = "stroke-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]";

// //   return (
// //     <button 
// //       onClick={onClick}
// //       className={`relative w-12 h-14 flex flex-col items-center justify-center group transition-all duration-300 ${isSelected ? "scale-110 z-10" : "hover:scale-105"}`}
// //     >
// //       <div className="relative w-10 h-10">
// //         <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
// //           <circle cx="22" cy="22" r={radius} className="fill-none stroke-white/10" strokeWidth="2.5" />
// //           <circle 
// //             cx="22" cy="22" r={radius} 
// //             className={`fill-none transition-all duration-500 ${color}`} 
// //             strokeWidth="2.5" 
// //             strokeDasharray={circumference}
// //             strokeDashoffset={strokeDashoffset}
// //             strokeLinecap="round"
// //           />
// //         </svg>
// //         <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>
// //           {date}
// //         </span>
// //       </div>
// //     </button>
// //   );
// // };

// // // Added onConfirm prop to handle the action
// // export default function BookingModal({ isOpen, onClose, slot, onConfirm }) {
// //   const [activeDate, setActiveDate] = useState(null); 
// //   const [cart, setCart] = useState([]); 

// //   if (!isOpen || !slot) return null;

// //   const handleSlotToggle = (date, timeSlot) => {
// //     setCart(prev => {
// //       const exists = prev.find(item => item.date === date && item.slotId === timeSlot.id);
// //       if (exists) {
// //         return prev.filter(item => !(item.date === date && item.slotId === timeSlot.id));
// //       } else {
// //         return [...prev, { date, slotId: timeSlot.id, price: timeSlot.price }];
// //       }
// //     });
// //   };

// //   const calendarData = Array.from({ length: 30 }, (_, i) => ({
// //     date: i + 1, total: 20, booked: Math.floor(Math.random() * 15) 
// //   }));

// //   const totalPrice = cart.reduce((total, item) => {
// //     const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
// //     return total + priceNum;
// //   }, 0);

// //   // New Confirm Handler
// //   const handleConfirmClick = () => {
// //     onConfirm(cart); // Pass the selected slots back to parent if needed
// //     onClose();       // Close the modal
// //   };

// //   return (
// //     <AnimatePresence>
// //       <motion.div 
// //         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //         className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
// //       >
// //         <motion.div 
// //           initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
// //           className="bg-[#0b0b0b] border border-white/10 w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
// //         >
            
// //             {/* --- COL 1: SCREEN DETAILS --- */}
// //             <div className="w-full lg:w-1/4 bg-[#111] p-6 flex flex-col border-r border-white/5 overflow-y-auto hidden lg:flex">
// //                 <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-4 shadow-lg flex-shrink-0">
// //                     <img src={slot.image} alt="" className="w-full h-full object-cover" />
// //                 </div>
// //                 <h2 className="text-xl font-bold text-white mb-1 leading-tight">{slot.title}</h2>
// //                 <p className="text-white/50 text-xs mb-6 flex items-center gap-1">
// //                     <MapPin className="w-3 h-3" /> {slot.area}, {slot.city}
// //                 </p>

// //                 <div className="space-y-4">
// //                     <div className="bg-white/5 rounded-lg p-3 border border-white/5">
// //                         <div className="text-[10px] text-white/40 uppercase mb-1">Screen Specs</div>
// //                         <div className="text-sm font-medium text-white">4K LED Wall (12ft x 8ft)</div>
// //                     </div>
// //                     <div className="bg-white/5 rounded-lg p-3 border border-white/5">
// //                         <div className="text-[10px] text-white/40 uppercase mb-1">Total Screens</div>
// //                         <div className="text-sm font-medium text-white">{slot.screens || 1} Units</div>
// //                     </div>
// //                     <div className="bg-white/5 rounded-lg p-3 border border-white/5">
// //                         <div className="text-[10px] text-white/40 uppercase mb-1">Footfall</div>
// //                         <div className="text-sm font-medium text-white text-green-400">{slot.reach || "N/A"} / day</div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* --- COL 2: CALENDAR --- */}
// //             <div className="flex-1 bg-[#050505] p-6 flex flex-col border-r border-white/5 relative">
// //                  <div className="flex items-center justify-between mb-6">
// //                     <h3 className="text-lg font-bold text-white flex gap-2 items-center">
// //                         <Monitor className="w-5 h-5 text-cyan-400" /> Availability
// //                     </h3>
// //                     <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
// //                         <ChevronLeft className="w-4 h-4 text-white/50 hover:text-white cursor-pointer"/> 
// //                         <span className="text-xs font-mono text-white">Jan 2025</span> 
// //                         <ChevronRight className="w-4 h-4 text-white/50 hover:text-white cursor-pointer"/>
// //                     </div>
// //                 </div>

// //                 <div className="grid grid-cols-7 gap-2 overflow-y-auto pr-2 pb-4">
// //                     {['M','T','W','T','F','S','S'].map((d, i) => (
// //                         <div key={i} className="text-center text-[10px] text-white/30 font-bold mb-1">{d}</div>
// //                     ))}
// //                     {calendarData.map((day) => (
// //                         <div key={day.date} className="flex justify-center">
// //                             <DateRing 
// //                                 date={day.date} totalSlots={day.total} bookedSlots={day.booked}
// //                                 isSelected={activeDate === day.date}
// //                                 onClick={() => setActiveDate(day.date)}
// //                             />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* --- COL 3: TIME SLOTS & CHECKOUT --- */}
// //             <div className="w-full lg:w-1/4 bg-[#0a0a0a] p-6 flex flex-col relative border-l border-white/5">
// //                 <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors z-20">
// //                     <X className="w-4 h-4 text-white"/>
// //                 </button>
                
// //                 <h3 className="text-lg font-bold text-white mb-1">Configuration</h3>
// //                 <p className="text-xs text-white/40 mb-4">Select a date to view time slots</p>

// //                 <div className="flex-1 overflow-y-auto custom-scrollbar">
// //                     {activeDate ? (
// //                         <TimeSlotGrid 
// //                             date={activeDate} 
// //                             selectedSlots={cart} 
// //                             onSelect={handleSlotToggle} 
// //                         />
// //                     ) : (
// //                         <div className="h-48 flex flex-col items-center justify-center text-white/20 border-2 border-dashed border-white/10 rounded-xl mt-10">
// //                             <Clock className="w-8 h-8 mb-2 opacity-50" />
// //                             <span className="text-xs">Select a date from calendar</span>
// //                         </div>
// //                     )}
// //                 </div>

// //                 <div className="mt-4 pt-4 border-t border-white/10">
// //                     <div className="flex justify-between items-end mb-4">
// //                         <div>
// //                             <div className="text-[10px] text-white/40 uppercase">Total Items</div>
// //                             <div className="text-white font-bold">{cart.length} slots</div>
// //                         </div>
// //                         <div className="text-right">
// //                             <div className="text-[10px] text-white/40 uppercase">Total Cost</div>
// //                             <div className="text-xl text-cyan-400 font-mono font-bold">
// //                                 ₹{totalPrice.toLocaleString()}
// //                             </div>
// //                         </div>
// //                     </div>
                    
// //                     {/* CHANGED: Calls function instead of Link */}
// //                     <button 
// //                         onClick={handleConfirmClick}
// //                         disabled={cart.length === 0}
// //                         className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
// //                     >
// //                         Confirm & Add <Plus className="w-4 h-4" />
// //                     </button>
// //                 </div>
// //             </div>

// //         </motion.div>
// //       </motion.div>
// //     </AnimatePresence>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle2, Monitor, Clock } from "lucide-react";

// // --- SUB-COMPONENT: TIME SLOT SELECTOR ---
// const TimeSlotGrid = ({ date, onSelect, selectedSlots }) => {
//   const timeSlots = [
//     { id: "morn", label: "Morning", time: "06:00 - 12:00", price: "₹2,000" },
//     { id: "aft", label: "Afternoon", time: "12:00 - 16:00", price: "₹1,500" },
//     { id: "eve", label: "Prime Time", time: "16:00 - 22:00", price: "₹5,000" }, 
//     { id: "night", label: "Late Night", time: "22:00 - 06:00", price: "₹1,000" },
//   ];

//   return (
//     <div className="mt-6 animate-fadeIn">
//       <h4 className="text-sm font-bold text-white mb-3 flex justify-between items-center">
//         <span>Slots for <span className="text-cyan-400">Jan {date}</span></span>
//         <span className="text-[9px] bg-white/10 px-2 py-1 rounded text-white/50 uppercase tracking-wider">Multi-Select</span>
//       </h4>
//       <div className="grid grid-cols-2 gap-3">
//         {timeSlots.map((slot) => {
//           // Check if this specific slot is selected
//           const isSelected = selectedSlots.some(s => s.date === date && s.slotId === slot.id);
          
//           return (
//             <button
//               key={slot.id}
//               onClick={() => onSelect(date, slot)}
//               className={`
//                 flex flex-col items-start p-3 rounded-xl border text-left transition-all
//                 ${isSelected 
//                   ? "bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
//                   : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"}
//               `}
//             >
//               <div className="flex justify-between w-full mb-1">
//                 <span className={`text-xs font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>{slot.label}</span>
//                 {isSelected && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
//               </div>
//               <span className="text-[10px] text-white/50 mb-2">{slot.time}</span>
//               <span className="text-xs font-mono font-medium text-white">{slot.price}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // --- SUB-COMPONENT: CIRCULAR DATE RING ---
// const DateRing = ({ date, totalSlots, bookedSlots, isSelected, onClick }) => {
//   const bookedPercentage = (bookedSlots / totalSlots) * 100;
//   const radius = 18;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (bookedPercentage / 100) * circumference;

//   let color = "stroke-emerald-500"; 
//   if (bookedPercentage > 80) color = "stroke-rose-500";
//   else if (bookedPercentage > 50) color = "stroke-amber-500";
  
//   if (isSelected) color = "stroke-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]";

//   return (
//     <button 
//       onClick={onClick}
//       className={`relative w-12 h-14 flex flex-col items-center justify-center group transition-all duration-300 ${isSelected ? "scale-110 z-10" : "hover:scale-105"}`}
//     >
//       <div className="relative w-10 h-10">
//         <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
//           <circle cx="22" cy="22" r={radius} className="fill-none stroke-white/10" strokeWidth="2.5" />
//           <circle 
//             cx="22" cy="22" r={radius} 
//             className={`fill-none transition-all duration-500 ${color}`} 
//             strokeWidth="2.5" 
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//           />
//         </svg>
//         <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>
//           {date}
//         </span>
//       </div>
//     </button>
//   );
// };

// export default function BookingModal({ isOpen, onClose, slot, onConfirm }) {
//   const [activeDate, setActiveDate] = useState(null); 
//   const [cart, setCart] = useState([]); 

//   // Reset state when modal opens for a new slot
//   useEffect(() => {
//     if (isOpen) {
//       setCart([]);
//       setActiveDate(null);
//     }
//   }, [isOpen, slot]);

//   if (!isOpen || !slot) return null;

//   const handleSlotToggle = (date, timeSlot) => {
//     setCart(prev => {
//       const exists = prev.find(item => item.date === date && item.slotId === timeSlot.id);
//       if (exists) {
//         return prev.filter(item => !(item.date === date && item.slotId === timeSlot.id));
//       } else {
//         return [...prev, { date, slotId: timeSlot.id, price: timeSlot.price }];
//       }
//     });
//   };

//   // Generate mock calendar data
//   const calendarData = Array.from({ length: 30 }, (_, i) => ({
//     date: i + 1, total: 20, booked: Math.floor(Math.random() * 15) 
//   }));

//   const totalPrice = cart.reduce((total, item) => {
//     const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
//     return total + priceNum;
//   }, 0);

//   // --- ACTION HANDLER ---
//   const handleConfirm = () => {
//     if (onConfirm) {
//       onConfirm(cart); // Send data back to InventoryBrowser
//     }
//     onClose(); // Close the modal
//   };

//   return (
//     <AnimatePresence>
//       <motion.div 
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
//       >
//         <motion.div 
//           initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
//           className="bg-[#0b0b0b] border border-white/10 w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
//         >
            
//             {/* --- COL 1: SCREEN DETAILS --- */}
//             <div className="w-full lg:w-1/4 bg-[#111] p-6 flex flex-col border-r border-white/5 overflow-y-auto hidden lg:flex">
//                 <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-4 shadow-lg flex-shrink-0">
//                     <img src={slot.image} alt="" className="w-full h-full object-cover" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white mb-1 leading-tight">{slot.title}</h2>
//                 <p className="text-white/50 text-xs mb-6 flex items-center gap-1">
//                     <MapPin className="w-3 h-3" /> {slot.area}, {slot.city}
//                 </p>

//                 <div className="space-y-4">
//                     <div className="bg-white/5 rounded-lg p-3 border border-white/5">
//                         <div className="text-[10px] text-white/40 uppercase mb-1">Screen Specs</div>
//                         <div className="text-sm font-medium text-white">4K LED Wall (12ft x 8ft)</div>
//                     </div>
//                     <div className="bg-white/5 rounded-lg p-3 border border-white/5">
//                         <div className="text-[10px] text-white/40 uppercase mb-1">Total Screens</div>
//                         <div className="text-sm font-medium text-white">{slot.screens || 1} Units</div>
//                     </div>
//                     <div className="bg-white/5 rounded-lg p-3 border border-white/5">
//                         <div className="text-[10px] text-white/40 uppercase mb-1">Footfall</div>
//                         <div className="text-sm font-medium text-white text-green-400">{slot.reach || "N/A"} / day</div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- COL 2: CALENDAR --- */}
//             <div className="flex-1 bg-[#050505] p-6 flex flex-col border-r border-white/5 relative">
//                  <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-lg font-bold text-white flex gap-2 items-center">
//                         <Monitor className="w-5 h-5 text-cyan-400" /> Availability
//                     </h3>
//                     <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
//                         <ChevronLeft className="w-4 h-4 text-white/50 hover:text-white cursor-pointer"/> 
//                         <span className="text-xs font-mono text-white">Jan 2025</span> 
//                         <ChevronRight className="w-4 h-4 text-white/50 hover:text-white cursor-pointer"/>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-7 gap-2 overflow-y-auto pr-2 pb-4">
//                     {['M','T','W','T','F','S','S'].map((d, i) => (
//                         <div key={i} className="text-center text-[10px] text-white/30 font-bold mb-1">{d}</div>
//                     ))}
//                     {calendarData.map((day) => (
//                         <div key={day.date} className="flex justify-center">
//                             <DateRing 
//                                 date={day.date} totalSlots={day.total} bookedSlots={day.booked}
//                                 isSelected={activeDate === day.date}
//                                 onClick={() => setActiveDate(day.date)}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* --- COL 3: TIME SLOTS & CHECKOUT --- */}
//             <div className="w-full lg:w-1/4 bg-[#0a0a0a] p-6 flex flex-col relative border-l border-white/5">
//                 <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors z-20">
//                     <X className="w-4 h-4 text-white"/>
//                 </button>
                
//                 <h3 className="text-lg font-bold text-white mb-1">Configuration</h3>
//                 <p className="text-xs text-white/40 mb-4">Select a date to view time slots</p>

//                 <div className="flex-1 overflow-y-auto custom-scrollbar">
//                     {activeDate ? (
//                         <TimeSlotGrid 
//                             date={activeDate} 
//                             selectedSlots={cart} 
//                             onSelect={handleSlotToggle} 
//                         />
//                     ) : (
//                         <div className="h-48 flex flex-col items-center justify-center text-white/20 border-2 border-dashed border-white/10 rounded-xl mt-10">
//                             <Clock className="w-8 h-8 mb-2 opacity-50" />
//                             <span className="text-xs">Select a date from calendar</span>
//                         </div>
//                     )}
//                 </div>

//                 {/* Footer Action Area */}
//                 <div className="mt-4 pt-4 border-t border-white/10">
//                     <div className="flex justify-between items-end mb-4">
//                         <div>
//                             <div className="text-[10px] text-white/40 uppercase">Total Items</div>
//                             <div className="text-white font-bold">{cart.length} slots</div>
//                         </div>
//                         <div className="text-right">
//                             <div className="text-[10px] text-white/40 uppercase">Total Cost</div>
//                             <div className="text-xl text-cyan-400 font-mono font-bold">
//                                 ₹{totalPrice.toLocaleString()}
//                             </div>
//                         </div>
//                     </div>
                    
//                     {/* CONFIRM BUTTON (Triggers function, not link) */}
//                     <button 
//                         onClick={handleConfirm}
//                         disabled={cart.length === 0}
//                         className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
//                     >
//                         Confirm & Add <CheckCircle2 className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>

//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle2, Monitor, Clock } from "lucide-react";

// --- SUB-COMPONENT: TIME SLOT SELECTOR ---
const TimeSlotGrid = ({ date, onSelect, selectedSlots }) => {
  const timeSlots = [
    { id: "morn", label: "Morning", time: "06:00 - 12:00", price: "₹2,000" },
    { id: "aft", label: "Afternoon", time: "12:00 - 16:00", price: "₹1,500" },
    { id: "eve", label: "Prime Time", time: "16:00 - 22:00", price: "₹5,000" }, 
    { id: "night", label: "Late Night", time: "22:00 - 06:00", price: "₹1,000" },
  ];

  return (
    <div className="mt-6 animate-fadeIn">
      <h4 className="text-sm font-bold text-white mb-3 flex justify-between items-center">
        <span>Slots for <span className="text-cyan-400">Jan {date}</span></span>
        <span className="text-[9px] bg-white/10 px-2 py-1 rounded text-white/50 uppercase tracking-wider">Multi-Select</span>
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {timeSlots.map((slot) => {
          const isSelected = selectedSlots.some(s => s.date === date && s.slotId === slot.id);
          return (
            <button
              key={slot.id}
              onClick={() => onSelect(date, slot)}
              className={`
                flex flex-col items-start p-3 rounded-xl border text-left transition-all
                ${isSelected 
                  ? "bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
                  : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"}
              `}
            >
              <div className="flex justify-between w-full mb-1">
                <span className={`text-xs font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>{slot.label}</span>
                {isSelected && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
              </div>
              <span className="text-[10px] text-white/50 mb-2">{slot.time}</span>
              <span className="text-xs font-mono font-medium text-white">{slot.price}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: CIRCULAR DATE RING ---
const DateRing = ({ date, totalSlots, bookedSlots, isSelected, onClick }) => {
  const bookedPercentage = (bookedSlots / totalSlots) * 100;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (bookedPercentage / 100) * circumference;

  let color = "stroke-emerald-500"; 
  if (bookedPercentage > 80) color = "stroke-rose-500";
  else if (bookedPercentage > 50) color = "stroke-amber-500";
  
  if (isSelected) color = "stroke-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]";

  return (
    <button 
      onClick={onClick}
      className={`relative w-12 h-14 flex flex-col items-center justify-center group transition-all duration-300 ${isSelected ? "scale-110 z-10" : "hover:scale-105"}`}
    >
      <div className="relative w-10 h-10">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r={radius} className="fill-none stroke-white/10" strokeWidth="2.5" />
          <circle 
            cx="22" cy="22" r={radius} 
            className={`fill-none transition-all duration-500 ${color}`} 
            strokeWidth="2.5" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>
          {date}
        </span>
      </div>
    </button>
  );
};

// --- MAIN MODAL COMPONENT ---
export default function BookingModal({ isOpen, onClose, slot, onConfirm }) {
  const [activeDate, setActiveDate] = useState(null); 
  const [cart, setCart] = useState([]); 

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCart([]);
      setActiveDate(null);
    }
  }, [isOpen, slot]);

  if (!isOpen || !slot) return null;

  const handleSlotToggle = (date, timeSlot) => {
    setCart(prev => {
      const exists = prev.find(item => item.date === date && item.slotId === timeSlot.id);
      if (exists) {
        return prev.filter(item => !(item.date === date && item.slotId === timeSlot.id));
      } else {
        return [...prev, { date, slotId: timeSlot.id, price: timeSlot.price }];
      }
    });
  };

  const calendarData = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1, total: 20, booked: Math.floor(Math.random() * 15) 
  }));

  const totalPrice = cart.reduce((total, item) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
    return total + priceNum;
  }, 0);

  // Handle "Confirm & Add" click
  const handleConfirmClick = () => {
    // Send data back to parent
    if (onConfirm) onConfirm(cart);
    // Close modal
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      >
        <motion.div 
          initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
          className="bg-[#0b0b0b] border border-white/10 w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
            
            {/* COL 1: DETAILS */}
            <div className="w-full lg:w-1/4 bg-[#111] p-6 flex flex-col border-r border-white/5 overflow-y-auto hidden lg:flex">
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-4 shadow-lg flex-shrink-0">
                    <img src={slot.image} alt="" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-bold text-white mb-1 leading-tight">{slot.title}</h2>
                <p className="text-white/50 text-xs mb-6 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {slot.area}, {slot.city}
                </p>

                <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className="text-[10px] text-white/40 uppercase mb-1">Screen Specs</div>
                        <div className="text-sm font-medium text-white">4K LED Wall (12ft x 8ft)</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className="text-[10px] text-white/40 uppercase mb-1">Total Screens</div>
                        <div className="text-sm font-medium text-white">{slot.screens || 1} Units</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className="text-[10px] text-white/40 uppercase mb-1">Footfall</div>
                        <div className="text-sm font-medium text-white text-green-400">{slot.reach || "N/A"} / day</div>
                    </div>
                </div>
            </div>

            {/* COL 2: CALENDAR */}
            <div className="flex-1 bg-[#050505] p-6 flex flex-col border-r border-white/5 relative">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white flex gap-2 items-center">
                        <Monitor className="w-5 h-5 text-cyan-400" /> Availability
                    </h3>
                    <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
                        <ChevronLeft className="w-4 h-4 text-white/50 hover:text-white cursor-pointer"/> 
                        <span className="text-xs font-mono text-white">Jan 2025</span> 
                        <ChevronRight className="w-4 h-4 text-white/50 hover:text-white cursor-pointer"/>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2 overflow-y-auto pr-2 pb-4">
                    {['M','T','W','T','F','S','S'].map((d, i) => (
                        <div key={i} className="text-center text-[10px] text-white/30 font-bold mb-1">{d}</div>
                    ))}
                    {calendarData.map((day) => (
                        <div key={day.date} className="flex justify-center">
                            <DateRing 
                                date={day.date} totalSlots={day.total} bookedSlots={day.booked}
                                isSelected={activeDate === day.date}
                                onClick={() => setActiveDate(day.date)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* COL 3: CHECKOUT */}
            <div className="w-full lg:w-1/4 bg-[#0a0a0a] p-6 flex flex-col relative border-l border-white/5">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors z-20">
                    <X className="w-4 h-4 text-white"/>
                </button>
                
                <h3 className="text-lg font-bold text-white mb-1">Configuration</h3>
                <p className="text-xs text-white/40 mb-4">Select a date to view time slots</p>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {activeDate ? (
                        <TimeSlotGrid 
                            date={activeDate} 
                            selectedSlots={cart} 
                            onSelect={handleSlotToggle} 
                        />
                    ) : (
                        <div className="h-48 flex flex-col items-center justify-center text-white/20 border-2 border-dashed border-white/10 rounded-xl mt-10">
                            <Clock className="w-8 h-8 mb-2 opacity-50" />
                            <span className="text-xs">Select a date from calendar</span>
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <div className="text-[10px] text-white/40 uppercase">Total Items</div>
                            <div className="text-white font-bold">{cart.length} slots</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-white/40 uppercase">Total Cost</div>
                            <div className="text-xl text-cyan-400 font-mono font-bold">
                                ₹{totalPrice.toLocaleString()}
                            </div>
                        </div>
                    </div>
                    
                    {/* BUTTON: CALLS FUNCTION, DOES NOT LINK */}
                    <button 
                        onClick={handleConfirmClick}
                        disabled={cart.length === 0}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                    >
                        Confirm & Add <CheckCircle2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}