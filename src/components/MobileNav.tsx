
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
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-background border-r border-border shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
