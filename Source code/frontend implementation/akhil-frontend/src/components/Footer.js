import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16 md:mb-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              LungAI
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="text-slate-600 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link to="/test" className="text-slate-600 hover:text-teal-600 transition-colors">
              Test
            </Link>
            <Link to="/creators" className="text-slate-600 hover:text-teal-600 transition-colors">
              Creators
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 text-center text-sm text-slate-600">
          <p className="mb-2">
            Copyright © 2025 | Lung Cancer Detection | Educational Use Only
          </p>
          <p className="text-xs text-slate-500">
            This system is for educational purposes only and not intended for clinical diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
};