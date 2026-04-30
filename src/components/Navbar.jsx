import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-new.png';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  const WA_NUMBER = '919876543210';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-luxury py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-3 shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-white/0 flex items-center justify-center">
              <img
                src={logo}
                alt="Iconic Unisex Salon"
                className="w-full h-full object-contain logo-blend scale-110"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                style={{ fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.18em' }}
                className="text-[1.05rem] font-bold text-charcoal tracking-widest uppercase"
              >
                Iconic
              </span>
              <span className="text-[0.55rem] tracking-[0.28em] text-gold uppercase font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Unisex Salon
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNav(link.href)}
                style={{ fontFamily: 'Inter, sans-serif' }}
                className={`text-[0.78rem] tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                  activeLink === link.href ? 'text-gold' : 'text-charcoal-soft hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1px] bg-gold transition-all duration-400 ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-smoke hover:text-gold hover:border-gold transition-all duration-300 hover:scale-110"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.522 4.004 1.438 5.695L0 24l6.474-1.414A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.784 9.784 0 01-5.017-1.374l-.36-.214-3.732.815.843-3.636-.235-.374A9.783 9.783 0 012.18 12C2.18 6.56 6.56 2.18 12 2.18c5.44 0 9.82 4.38 9.82 9.82 0 5.44-4.38 9.818-9.82 9.818z"/>
              </svg>
            </a>
            {/* Call */}
            <a
              href="tel:+919876543210"
              title="Call Us"
              className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-smoke hover:text-gold hover:border-gold transition-all duration-300 hover:scale-110"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.39a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href="#contact" className="btn-gold ml-1">Book Now</a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
          >
            <span className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-400 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-ivory/96 backdrop-blur-xl shadow-float flex flex-col pt-24 pb-10 px-8 transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6 mb-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm tracking-widest uppercase font-medium border-b border-gold/10 pb-4 transition-colors duration-200 ${
                  activeLink === link.href ? 'text-gold' : 'text-charcoal'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold text-center mb-4">
            Book Now
          </a>
          <div className="flex gap-4 justify-center mt-2">
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="text-smoke hover:text-gold transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.522 4.004 1.438 5.695L0 24l6.474-1.414A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.784 9.784 0 01-5.017-1.374l-.36-.214-3.732.815.843-3.636-.235-.374A9.783 9.783 0 012.18 12C2.18 6.56 6.56 2.18 12 2.18c5.44 0 9.82 4.38 9.82 9.82 0 5.44-4.38 9.818-9.82 9.818z"/></svg>
            </a>
            <a href="tel:+919876543210" className="text-smoke hover:text-gold transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.39a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
