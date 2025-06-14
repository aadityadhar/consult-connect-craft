
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "Why us?" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden relative z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu 
            className={`h-6 w-6 absolute transition-all duration-300 ${
              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`} 
          />
          <X 
            className={`h-6 w-6 absolute transition-all duration-300 ${
              isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            }`} 
          />
        </div>
      </Button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-md border-l border-border shadow-2xl transition-transform duration-300 ease-out md:hidden z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="h-8 w-8 p-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center text-lg font-medium py-4 px-4 rounded-xl bg-card hover:bg-accent border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] ${
                    'animate-fade-in'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                  onClick={toggleMenu}
                >
                  <span className="text-foreground hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Ready to get started?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
