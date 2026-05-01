import React from 'react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #2C2C2C 0%, #222222 100%)',
      }}
    >
      {/* Gold top border */}
      <div
        className="w-full h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A96E 30%, #EDD9A3 50%, #C9A96E 70%, transparent 100%)' }}
      />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-4">
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-full bg-white/90 overflow-hidden flex items-center justify-center">
                <img
                  src={logo}
                  alt="Iconic Unisex Salon"
                  className="w-full h-full object-contain logo-blend scale-110"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.18em', color: '#EDD9A3' }}
                  className="text-[1.05rem] font-bold tracking-widest uppercase"
                >
                  Iconic
                </span>
                <span
                  className="text-[0.55rem] tracking-[0.28em] uppercase font-medium"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#9E9490' }}
                >
                  Unisex Salon
                </span>
              </div>
            </a>

            <p
              className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Bengaluru&apos;s most refined unisex salon experience. Where artistry meets
              luxury and every detail matters.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <p
                className="text-white/40 text-xs leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Lila Nilayam 1079/5, 22nd Main Rd, A Block, Sahakar Nagar, Bengaluru, Karnataka 560092
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 transition-all duration-300 hover:text-gold hover:scale-110"
                  style={{ border: '1px solid rgba(201,169,110,0.2)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.5)'; e.currentTarget.style.background = 'rgba(201,169,110,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4
              className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#C9A96E' }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4
              className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#C9A96E' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {['Hair Styling', 'Colour & Highlights', 'Skin Rituals', 'Grooming', 'Bridal', 'Treatments'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4
              className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#C9A96E' }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:9100040648" className="flex items-center gap-2.5 text-white/40 hover:text-gold transition-colors group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.39a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>+91 9100040648</span>
              </a>
              <a href="https://wa.me/919100040648" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/40 hover:text-gold transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.522 4.004 1.438 5.695L0 24l6.474-1.414A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.784 9.784 0 01-5.017-1.374l-.36-.214-3.732.815.843-3.636-.235-.374A9.783 9.783 0 012.18 12C2.18 6.56 6.56 2.18 12 2.18c5.44 0 9.82 4.38 9.82 9.82 0 5.44-4.38 9.818-9.82 9.818z" /></svg>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp Us</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/40">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Mon–Sun, 6 AM – 9 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(201,169,110,0.12)' }}
        >
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            &copy; {new Date().getFullYear()} Iconic Unisex Salon. All rights reserved.
          </p>
          <p
            className="text-white/25 text-xs flex items-center gap-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Crafted with ♥ in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
