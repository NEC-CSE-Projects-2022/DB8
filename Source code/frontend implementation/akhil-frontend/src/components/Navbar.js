import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, Info, FlaskConical, Mail, Users } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: 'http://127.0.0.1:5000', label: 'Test', icon: FlaskConical, external: true },
    { path: '/creators', label: 'Creators', icon: Users },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-1 group" data-testid="navbar-logo">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent whitespace-nowrap">LungAI</span>
            </Link>

            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-slate-600 hover:bg-slate-100`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="px-4 h-12 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-1" data-testid="navbar-logo-mobile">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent whitespace-nowrap">LungAI</span>
            </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg" data-testid="mobile-bottom-nav">
        <div className="grid grid-cols-5 h-16">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className={`flex flex-col items-center justify-center gap-1 transition-all text-slate-600 active:bg-slate-100`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{link.label}</span>
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className={`flex flex-col items-center justify-center gap-1 transition-all ${
                  isActive(link.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-600 active:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${
                  isActive(link.path) ? 'scale-110' : ''
                }`} />
                <span className="text-xs font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};