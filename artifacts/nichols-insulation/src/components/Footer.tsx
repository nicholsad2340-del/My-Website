import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white tracking-wide" data-testid="text-footer-brand">Nichols Insulation</h3>
            <p className="text-gray-300 max-w-sm" data-testid="text-footer-tagline">
              Expert residential and commercial insulation — on time, within budget, and built to last decades.
            </p>
            <div className="pt-2">
              <a href="tel:9313269492" className="text-accent text-xl font-bold hover:underline" data-testid="link-footer-phone">
                Call us Today: 931-326-9492
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider" data-testid="text-footer-services-heading">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-service-1">
                  Blown-In Insulation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-service-2">
                  Batt & Roll Insulation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-service-3">
                  Radiant Barriers
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-service-4">
                  Commercial Insulation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider" data-testid="text-footer-company-heading">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p data-testid="text-footer-copyright">© 2025 Nichols Insulation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-2 text-center" data-testid="text-footer-badges">
            <span>Licensed & Insured</span>
            <span className="text-gray-600">·</span>
            <span>Energy Star Partner</span>
            <span className="text-gray-600">·</span>
            <span>BBB Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}