import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import logoPath from '@assets/Logo_1783105715227.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full flex flex-col z-50">
      {/* Logo Banner */}
      <div className="bg-background border-b-4 border-primary flex justify-center items-center py-4 px-4">
        <Link href="/">
          <img src={logoPath} alt="Nichols Insulation Logo" className="h-[90px] w-auto cursor-pointer" data-testid="img-logo-main" />
        </Link>
      </div>

      {/* Top Bar (Dark Green) */}
      <div className="hidden md:flex bg-secondary text-white py-2 px-8 justify-end text-sm border-b border-secondary-foreground/10">
        <div className="flex space-x-6 items-center">
          <a href="mailto:adam@nicholsinsulation.com" className="hover:text-accent transition-colors" data-testid="link-email-top">adam@nicholsinsulation.com</a>
          <span>James: <a href="tel:9313204426" className="text-accent font-bold hover:underline" data-testid="link-phone-james"> (931) 320-4426</a></span>
          <span>Adam: <a href="tel:9318015391" className="text-accent font-bold hover:underline" data-testid="link-phone-adam"> (931) 801-5391</a></span>
        </div>
      </div>

      {/* Nav Bar (Forest Green) */}
      <nav className="bg-primary text-white sticky top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <img 
                  src={logoPath} 
                  alt="Nichols Insulation Logo Small" 
                  className="h-[46px] w-auto cursor-pointer transition-transform hover:scale-105" 
                  style={{ filter: "brightness(0) invert(1)" }} 
                  data-testid="img-logo-small"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`px-4 py-2 rounded-md font-medium transition-colors ${location === link.href ? 'bg-white text-primary' : 'hover:bg-primary-foreground/10'}`} data-testid={`nav-link-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              ))}
              <div className="pl-4">
                <Link href="/contact" className="bg-accent hover:bg-[#d67118] text-white px-6 py-2.5 rounded-md font-bold transition-colors shadow-sm" data-testid="button-free-estimate-nav">
                  Free Estimate
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4 pt-2">
            <div className="px-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    className={`block px-4 py-3 rounded-md font-medium ${location === link.href ? 'bg-white text-primary' : 'hover:bg-primary-foreground/10'}`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`nav-link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link href="/contact">
                  <div 
                    className="block text-center bg-accent text-white px-4 py-3 rounded-md font-bold shadow-sm"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="button-free-estimate-nav-mobile"
                  >
                    Free Estimate
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}