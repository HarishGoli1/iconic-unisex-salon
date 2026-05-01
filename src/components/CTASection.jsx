import React from 'react';

const CTA = () => {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5EFE6 0%, #F4E8E4 40%, #FDFCF8 100%)',
      }}
    >
      {/* Gold glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Decorative lines */}
      <div
        className="absolute top-1/2 left-0 w-full h-[1px] opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A96E 30%, #C9A96E 70%, transparent 100%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <div className="ornament mb-6 reveal" data-delay="0">Begin Your Journey</div>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight reveal"
          style={{ fontFamily: 'Playfair Display, serif' }}
          data-delay="100"
        >
          Transform the Way
          <br />
          the World{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #C9A96E 0%, #EDD9A3 50%, #A8813E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Sees You
          </span>
        </h2>
        <p
          className="text-smoke text-xl leading-relaxed mb-12 max-w-2xl mx-auto reveal"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-delay="200"
        >
          Your next chapter starts at Iconic. Curated styling, expert artistry, and a
          luxury experience — all in one transformative visit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" data-delay="300">
          <a href="#contact" className="btn-gold">Book Appointment</a>
          <a
            href="https://wa.me/919100040648"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#C9A96E' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.522 4.004 1.438 5.695L0 24l6.474-1.414A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.784 9.784 0 01-5.017-1.374l-.36-.214-3.732.815.843-3.636-.235-.374A9.783 9.783 0 012.18 12C2.18 6.56 6.56 2.18 12 2.18c5.44 0 9.82 4.38 9.82 9.82 0 5.44-4.38 9.818-9.82 9.818z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
