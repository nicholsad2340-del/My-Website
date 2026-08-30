import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoPath from '@assets/Logo_1783106526737.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Bar (Dark Green) */}
      <div className="hidden md:flex bg-secondary text-white py-2 px-8 justify-end text-sm border-b border-secondary-foreground/10">
        <div className="flex space-x-6 items-center">
          <a href="mailto:adam@nicholsinsulation.com" className="hover:text-accent transition-colors" data-testid="link-email-top">adam@nicholsinsulation.com</a>
          <span>Call us Today: <a href="tel:9313269492" className="text-accent font-bold hover:underline" data-testid="link-phone-top">931-326-9492</a></span>
        </div>
      </div>

      {/* Nav Bar (Warm Off-White) */}
      <nav className="bg-background text-primary sticky top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src={logoPath} 
                  alt="Nichols Insulation Logo Small" 
                  className="h-[46px] w-auto cursor-pointer transition-transform hover:scale-105" 
                  data-testid="img-logo-small"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) => `px-4 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-primary hover:bg-primary/10'}`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pl-4">
                <Link to="/contact" className="bg-accent hover:bg-[#d67118] text-white px-6 py-2.5 rounded-md font-bold transition-colors shadow-sm" data-testid="button-free-estimate-nav">
                  Free Estimate
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary p-2 focus:outline-none"
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-primary/10 pb-4 pt-2">
            <div className="px-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) => `block px-4 py-3 rounded-md font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-primary hover:bg-primary/10'}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`nav-link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 pb-2">
                <Link to="/contact">
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