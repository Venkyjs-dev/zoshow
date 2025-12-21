// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
//       &copy; {new Date().getFullYear()} ZoShow. All rights reserved.
//     </footer>
//   );
// }


import React from "react";
import zoshowLogo from "../assets/zoshow-logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <img src={zoshowLogo} alt="Logo" className="w-10 h-10 rounded-xl grayscale opacity-80" />
                    <span className="text-xl font-bold text-white">ZoShow</span>
                </div>
                <p className="text-white/40 max-w-sm leading-relaxed">
                    Building the future of digital city infrastructure. 
                    Connecting brands to people through intelligent, 
                    data-driven out-of-home networks.
                </p>
            </div>

            {/* Links */}
            <div>
                <h4 className="text-white font-bold mb-6">Platform</h4>
                <ul className="space-y-4 text-sm text-white/50">
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Network Map</li>
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Analytics</li>
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Programmatic</li>
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Case Studies</li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-white/50">
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">About Us</li>
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</li>
                    <li className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</li>
                </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} ZoShow Advertising Networks. All rights reserved.</p>
            <div className="flex gap-6">
                <span>Bangalore</span>
                <span>Amaravathi</span>
            </div>
        </div>
      </div>
    </footer>
  );
}