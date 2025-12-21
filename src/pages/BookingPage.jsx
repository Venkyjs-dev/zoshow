// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useBooking } from "../context/BookingContext"; // 1. Import Context
// import { 
//   ArrowLeft, Monitor, Upload, CreditCard, Info, MapPin, 
//   Trash2, FileVideo, CheckCircle2, Loader2 
// } from "lucide-react";

// export default function BookingPage() {
//   const { cart, removeFromCart } = useBooking(); // 2. Get Data
  
//   // --- FILE UPLOAD STATE ---
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [uploadSuccess, setUploadSuccess] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setUploading(true);
//       // Simulate upload delay
//       setTimeout(() => {
//         setUploading(false);
//         setUploadSuccess(true);
//       }, 2000);
//     }
//   };

//   // Calculate Total (Simple logic for demo)
//   // In a real app, you'd sum up the specific prices from the configuration
//   const totalCost = cart.reduce((acc, item) => acc + (item.priceValue || 10000), 0);

//   return (
//     <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      
//       {/* Background Ambience */}
//       <div className="fixed inset-0 pointer-events-none">
//          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
//          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* --- HEADER --- */}
//         <div className="mb-10">
//             <Link to="/inventory" className="inline-flex items-center text-white/50 hover:text-cyan-400 transition-colors mb-6 text-sm">
//                 <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
//             </Link>
//             <h1 className="text-4xl md:text-5xl font-bold mb-3 font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
//                 Confirm Campaign
//             </h1>
//             <p className="text-white/50 text-lg">Finalize your assets and scheduling for {cart.length} selected screens.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
//             {/* --- LEFT COLUMN --- */}
//             <div className="lg:col-span-2 space-y-8">
                
//                 {/* 1. SELECTED LOCATIONS LIST (Dynamic from Context) */}
//                 <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
//                     <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-xl font-bold flex items-center gap-2">
//                             <Monitor className="w-5 h-5 text-cyan-400" /> Selected Locations
//                         </h3>
//                         <Link to="/inventory" className="text-xs text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-wider">
//                             + Add More
//                         </Link>
//                     </div>

//                     <div className="space-y-4">
//                         {cart.length === 0 ? (
//                             <div className="text-center py-10 text-white/30 border-2 border-dashed border-white/10 rounded-xl">
//                                 <p>No locations selected.</p>
//                                 <Link to="/inventory" className="text-cyan-400 text-sm mt-2 block hover:underline">Browse Inventory</Link>
//                             </div>
//                         ) : (
//                             cart.map((item, index) => (
//                                 <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group relative">
//                                     <img src={item.image} alt="Screen" className="w-full sm:w-24 h-24 rounded-lg object-cover" />
//                                     <div className="flex-1">
//                                         <div className="flex justify-between items-start">
//                                             <h4 className="font-bold text-white text-lg">{item.title}</h4>
//                                         </div>
//                                         <div className="flex items-center gap-1 text-white/50 text-sm mb-2">
//                                             <MapPin className="w-3 h-3" /> {item.city}
//                                         </div>
//                                         <div className="flex gap-3 text-xs">
//                                             <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded">
//                                                 {Array.isArray(item.configuration) ? `${item.configuration.length} Slots` : "Standard Run"}
//                                             </span>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="text-left sm:text-right pt-2 sm:pt-0 border-t sm:border-0 border-white/10 mt-2 sm:mt-0 flex flex-col justify-center">
//                                         <div className="text-white font-mono font-bold text-xl">{item.price}</div>
//                                         <button 
//                                             onClick={() => removeFromCart(item.id)}
//                                             className="text-xs text-red-400/50 hover:text-red-400 mt-2 flex items-center justify-end gap-1"
//                                         >
//                                             <Trash2 className="w-3 h-3" /> Remove
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>

//                 {/* 2. FILE UPLOAD & DETAILS */}
//                 <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
//                     <h3 className="text-xl font-bold mb-6 text-white">Campaign Assets</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
//                         <div className="space-y-2">
//                             <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Brand Name</label>
//                             <input type="text" placeholder="e.g. Nike Summer" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" />
//                         </div>

//                         <div className="space-y-2">
//                             <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Contact Email</label>
//                             <input type="email" placeholder="marketing@brand.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" />
//                         </div>

//                         {/* --- FILE UPLOAD ZONE --- */}
//                         <div className="space-y-2 md:col-span-2">
//                             <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Upload Creative</label>
                            
//                             {!file ? (
//                                 <div className="relative border-2 border-dashed border-white/10 rounded-xl p-10 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:bg-white/5 transition-all group">
//                                     <input 
//                                         type="file" 
//                                         accept="video/*,image/*"
//                                         onChange={handleFileChange}
//                                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                     />
//                                     <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
//                                         <Upload className="w-6 h-6 text-cyan-400" />
//                                     </div>
//                                     <p className="text-sm font-bold text-white mb-1">Click or Drag to upload assets</p>
//                                     <p className="text-xs text-white/40">MP4, MOV, JPG (16:9 Aspect Ratio)</p>
//                                 </div>
//                             ) : (
//                                 <div className="border border-white/10 bg-white/5 rounded-xl p-4 flex items-center justify-between">
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center text-cyan-400">
//                                             <FileVideo className="w-6 h-6" />
//                                         </div>
//                                         <div>
//                                             <p className="text-sm font-bold text-white truncate max-w-[200px]">{file.name}</p>
//                                             <p className="text-xs text-white/40">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         {uploading ? (
//                                             <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
//                                                 <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
//                                             </div>
//                                         ) : uploadSuccess ? (
//                                             <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
//                                                 <CheckCircle2 className="w-4 h-4" /> Ready
//                                             </div>
//                                         ) : null}
//                                     </div>
                                    
//                                     {!uploading && (
//                                         <button onClick={() => {setFile(null); setUploadSuccess(false);}} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white">
//                                             <X className="w-4 h-4" />
//                                         </button>
//                                     )}
//                                 </div>
//                             )}
//                         </div>

//                     </div>
//                 </div>

//             </div>

//             {/* --- RIGHT COLUMN: SUMMARY --- */}
//             <div className="lg:col-span-1">
//                 <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl p-6 sticky top-28 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
//                     <h3 className="text-xl font-bold mb-6 font-heading flex items-center gap-2">
//                         Summary
//                     </h3>
                    
//                     <div className="space-y-4 mb-8">
//                         <div className="flex justify-between items-center text-sm">
//                             <span className="text-white/60">Total Locations</span>
//                             <span className="font-mono text-white">{cart.length}</span>
//                         </div>
//                         <div className="flex justify-between items-center text-sm">
//                             <span className="text-white/60">Creative Status</span>
//                             <span className={`font-mono font-bold ${uploadSuccess ? "text-green-400" : "text-orange-400"}`}>
//                                 {uploadSuccess ? "Uploaded" : "Pending"}
//                             </span>
//                         </div>
                        
//                         <div className="h-px bg-white/10 my-4" />
                        
//                         <div className="flex justify-between items-end">
//                             <span className="text-white/60">Total Cost</span>
//                             <span className="text-3xl font-bold text-white font-mono">
//                                 ₹{totalCost.toLocaleString()}
//                             </span>
//                         </div>
//                         <div className="text-[10px] text-white/30 text-right">Inc. of all taxes</div>
//                     </div>

//                     <button 
//                         disabled={cart.length === 0 || !uploadSuccess}
//                         className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         <CreditCard className="w-5 h-5" /> 
//                         Proceed to Payment
//                     </button>

//                     <div className="mt-6 flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
//                         <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
//                         <p className="text-[11px] text-blue-200 leading-relaxed">
//                             Upload a creative to proceed. Slots are reserved for 15 minutes.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext"; 
import { 
  ArrowLeft, Monitor, Upload, CreditCard, Info, MapPin, 
  Trash2, FileVideo, CheckCircle2, Loader2, X, Image as ImageIcon, Film 
} from "lucide-react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const { cart, removeFromCart } = useBooking(); 
  
  // --- FILE UPLOAD STATE ---
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Clean up preview URL
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFile = (selectedFile) => {
    if (selectedFile && (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("video/"))) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setUploading(true);
      setUploadProgress(0);
      setUploadSuccess(false);

      // Simulate Upload
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            setUploadSuccess(true);
            return 100;
          }
          return prev + 10;
        });
      }, 200); 
    } else {
      alert("Please upload a valid image or video file.");
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const removeFile = () => {
    setFile(null);
    setPreviewUrl(null);
    setUploadSuccess(false);
    setUploadProgress(0);
  };

  const totalCost = cart.reduce((acc, item) => acc + (item.priceValue || 10000), 0);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-10">
            <Link to="/inventory" className="inline-flex items-center text-white/50 hover:text-cyan-400 transition-colors mb-6 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Confirm Campaign
            </h1>
            <p className="text-white/50 text-lg">Finalize your assets and scheduling for {cart.length} selected screens.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
                
                {/* 1. SELECTED LOCATIONS */}
                <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Monitor className="w-5 h-5 text-cyan-400" /> Selected Locations
                        </h3>
                        <Link to="/inventory" className="text-xs text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-wider">
                            + Add More
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {cart.length === 0 ? (
                            <div className="text-center py-10 text-white/30 border-2 border-dashed border-white/10 rounded-xl">
                                <p>No locations selected.</p>
                                <Link to="/inventory" className="text-cyan-400 text-sm mt-2 block hover:underline">Browse Inventory</Link>
                            </div>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group relative">
                                    <img src={item.image} alt="Screen" className="w-full sm:w-24 h-24 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                        </div>
                                        <div className="flex items-center gap-1 text-white/50 text-sm mb-2">
                                            <MapPin className="w-3 h-3" /> {item.city}
                                        </div>
                                        <div className="flex gap-3 text-xs">
                                            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded">
                                                {item.configuration ? `${item.configuration.length} Time Slots` : "Standard Run"}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="text-left sm:text-right pt-2 sm:pt-0 border-t sm:border-0 border-white/10 mt-2 sm:mt-0 flex flex-col justify-center">
                                        <div className="text-white font-mono font-bold text-xl">{item.price}</div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-red-400/50 hover:text-red-400 mt-2 flex items-center justify-end gap-1"
                                        >
                                            <Trash2 className="w-3 h-3" /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* 2. CAMPAIGN ASSETS */}
                <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <h3 className="text-xl font-bold mb-6 text-white">Campaign Assets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Brand Name</label>
                            <input type="text" placeholder="e.g. Nike Summer" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Contact Email</label>
                            <input type="email" placeholder="marketing@brand.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" />
                        </div>

                        {/* --- FILE UPLOAD ZONE --- */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Upload Creative</label>
                            
                            {!file ? (
                                <div 
                                    onDragOver={onDragOver}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDrop}
                                    className={`relative border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition-all group cursor-pointer
                                        ${isDragging ? "border-cyan-500 bg-cyan-500/10 scale-[1.02]" : "border-white/10 hover:border-cyan-500/50 hover:bg-white/5"}
                                    `}
                                >
                                    {/* FIX: ADDED z-50 TO INPUT SO IT SITS ON TOP */}
                                    <input 
                                        type="file" 
                                        accept="video/*,image/*"
                                        onChange={(e) => handleFile(e.target.files[0])}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
                                    />
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg pointer-events-none">
                                        <Upload className={`w-6 h-6 ${isDragging ? "text-cyan-400 animate-bounce" : "text-white"}`} />
                                    </div>
                                    <p className="text-sm font-bold text-white mb-1 pointer-events-none">Click or Drag to upload assets</p>
                                    <p className="text-xs text-white/40 pointer-events-none">MP4, MOV, JPG (16:9 Aspect Ratio)</p>
                                </div>
                            ) : (
                                <div className="border border-white/10 bg-white/5 rounded-xl p-4 relative overflow-hidden">
                                    {uploading && (
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${uploadProgress}%` }}
                                            className="absolute bottom-0 left-0 h-1 bg-cyan-500 z-10"
                                        />
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-black rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                                                {file.type.startsWith('video') ? (
                                                    <video src={previewUrl} className="w-full h-full object-cover" muted />
                                                ) : (
                                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                                )}
                                            </div>
                                            
                                            <div>
                                                <p className="text-sm font-bold text-white truncate max-w-[200px]">{file.name}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60 uppercase">
                                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                                    </span>
                                                    {file.type.startsWith('video') ? (
                                                        <span className="text-[10px] flex items-center gap-1 text-purple-400"><Film className="w-3 h-3"/> Video</span>
                                                    ) : (
                                                        <span className="text-[10px] flex items-center gap-1 text-blue-400"><ImageIcon className="w-3 h-3"/> Image</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            {uploading ? (
                                                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                                                    <Loader2 className="w-4 h-4 animate-spin" /> {uploadProgress}%
                                                </div>
                                            ) : uploadSuccess ? (
                                                <div className="flex items-center gap-2 text-green-400 text-xs font-bold bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                                                    <CheckCircle2 className="w-4 h-4" /> Ready
                                                </div>
                                            ) : null}
                                            
                                            <button 
                                                onClick={removeFile} 
                                                className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-red-400 transition-colors"
                                                title="Remove File"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            {/* --- RIGHT COLUMN: SUMMARY --- */}
            <div className="lg:col-span-1">
                <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl p-6 sticky top-28 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
                    <h3 className="text-xl font-bold mb-6 font-heading flex items-center gap-2">
                        Summary
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-white/60">Total Locations</span>
                            <span className="font-mono text-white">{cart.length}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-white/60">Creative Status</span>
                            <span className={`font-mono font-bold ${uploadSuccess ? "text-green-400" : "text-orange-400"}`}>
                                {uploadSuccess ? "Uploaded" : "Pending"}
                            </span>
                        </div>
                        
                        <div className="h-px bg-white/10 my-4" />
                        
                        <div className="flex justify-between items-end">
                            <span className="text-white/60">Total Cost</span>
                            <span className="text-3xl font-bold text-white font-mono">
                                ₹{totalCost.toLocaleString()}
                            </span>
                        </div>
                        <div className="text-[10px] text-white/30 text-right">Inc. of all taxes</div>
                    </div>

                    <button 
                        disabled={cart.length === 0 || !uploadSuccess}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <CreditCard className="w-5 h-5" /> 
                        Proceed to Payment
                    </button>

                    <div className="mt-6 flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-[11px] text-blue-200 leading-relaxed">
                            Upload a creative to proceed. Slots are reserved for 15 minutes.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}