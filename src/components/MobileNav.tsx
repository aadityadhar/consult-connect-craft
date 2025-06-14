
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
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">D</span>
                </div>
                <span className="text-lg font-semibold">DHARESQUE</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200 py-4 border-b border-border/30"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Ready to get started? Contact us today.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
