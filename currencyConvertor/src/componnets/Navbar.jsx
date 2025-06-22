import React from "react";
import { TrendingUp, Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="relative z-20 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-xl shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CurrencyX</h1>
              <p className="text-xs text-gray-300">Real-time Converter</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white font-medium">Live Rates</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
