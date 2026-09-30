import React, { useState, useEffect } from 'react';
import { Network, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Risks', href: 'risks' },
    { label: 'Blueprints', href: 'solution' },
    { label: 'Flowchart', href: 'ecosystem' },
    { label: 'Platform UI', href: 'mockups' },
    { label: 'Technology', href: 'technology' },
    { label: 'Impact', href: 'impact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 sm:py-2.5 bg-white/95 backdrop-blur-md border-b border-orange-200/90 shadow-sm shadow-orange-500/5'
          : 'py-3 sm:py-4 bg-white/90 backdrop-blur-xs border-b border-orange-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Simplified Modern Brand Mark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none rounded-lg cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-orange-500 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <Network className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                  CAPACITY <span className="text-orange-600">CONNECT</span>
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[9px] font-mono font-bold bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SIH 26075</span>
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono font-medium hidden sm:block">
                Digital Capacity Building & LMS
              </span>
            </div>
          </button>

          {/* Simplified Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-orange-600 transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 rounded relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleNavClick('solution')}
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-orange-700 hover:bg-orange-50 border border-orange-200 rounded-lg transition-colors cursor-pointer"
            >
              Blueprints
            </button>
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all shadow-xs hover:shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Flowchart</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="sm:hidden px-2.5 py-1 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
            >
              Flowchart
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Simplified Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-orange-200 px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-in fade-in duration-150">
          <div className="flex items-center justify-between py-1.5 px-3 bg-orange-50 rounded-lg text-[11px] font-mono font-bold text-orange-800 border border-orange-200 mb-2">
            <span>SIH Problem Statement: 26075</span>
            <span className="text-emerald-700 font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Verified
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-3 py-2 text-xs font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50/80 rounded-lg transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 mt-2 border-t border-orange-100 flex gap-2">
            <button
              onClick={() => handleNavClick('solution')}
              className="flex-1 py-2 text-xs font-bold text-orange-700 bg-orange-50 border border-orange-300 rounded-lg text-center"
            >
              Role Blueprints
            </button>
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="flex-1 py-2 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-center shadow-xs"
            >
              Live Flowchart
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
