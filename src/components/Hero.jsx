import React from 'react';

/* Premium high-res salon images from Unsplash CDN */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=90';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Iconic Unisex Salon – Premium Salon Interior"
          className="w-full h-full object-cover object-center scale-105"
          style={{ willChange: 'transform' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, rgba(44,44,44,0.68) 0%, rgba(44,44,44,0.42) 50%, rgba(44,44,44,0.22) 100%)',
          }}
        />
        {/* Vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(20,16,12,0.45) 100%)',
          }}
        />
      </div>

      {/* ── Floating Decorative Shapes ── */}
      <div
        className="absolute top-1/4 right-12 w-64 h-64 rounded-full animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.14) 0%, transparent 70%)',
          filter: 'blur(20px)',
          animationDelay: '0s',
        }}
      />
      <div
        className="absolute bottom-1/3 left-16 w-48 h-48 rounded-full animate-float"
        style={{
          background:
            'radial-gradient(circle, rgba(244,232,228,0.12) 0%, transparent 70%)',
          filter: 'blur(16px)',
          animationDelay: '2s',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span
              className="h-[1px] w-8"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A96E)' }}
            />
            <span
              className="text-[0.6875rem] tracking-[0.22em] uppercase text-gold-light font-medium"
              style={{ fontFamily: 'Inter, sans-serif', color: '#EDD9A3' }}
            >
              Bengaluru&apos;s Finest
            </span>
            <span
              className="h-[1px] w-8"
              style={{ background: 'linear-gradient(90deg, #C9A96E, transparent)' }}
            />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.06] mb-6 animate-fade-up"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', animationDelay: '0.2s' }}
          >
            Where Style
            <br />
            <em
              className="not-italic"
              style={{
                background: 'linear-gradient(135deg, #EDD9A3 0%, #C9A96E 60%, #A8813E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Becomes Art.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="text-[1.0625rem] text-white/70 max-w-xl leading-relaxed mb-10 animate-fade-up"
            style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.35s' }}
          >
            An immersive luxury experience crafted for those who demand precision,
            artistry, and an atmosphere unlike anything else. Welcome to Iconic.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <a href="#contact" className="btn-gold">Book Appointment</a>
            <a href="#services" className="btn-outline-gold" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              Explore Services
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-10 mt-14 animate-fade-up"
            style={{ animationDelay: '0.65s' }}
          >
            {[
              { value: '10+', label: 'Years of Excellence' },
              { value: '5k+', label: 'Transformations' },
              { value: '4.9', label: 'Average Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold mb-0.5"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(135deg, #EDD9A3, #C9A96E)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[0.7rem] tracking-wider uppercase text-white/50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Editorial collage card */}
        <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div
            className="relative rounded-2xl overflow-hidden shadow-float"
            style={{ aspectRatio: '3/4', maxWidth: 380, marginLeft: 'auto' }}
          >
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=90"
              alt="Luxury Salon – Elegant Hair Styling"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=85';
              }}
            />
            {/* Glass caption */}
            <div
              className="absolute bottom-5 left-5 right-5 glass-dark rounded-xl px-5 py-3"
            >
              <p
                className="text-[0.6875rem] tracking-[0.18em] uppercase text-gold-light mb-0.5"
                style={{ fontFamily: 'Inter, sans-serif', color: '#EDD9A3' }}
              >
                Signature Look
              </p>
              <p
                className="text-white text-sm font-medium"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Expert Styling & Precision Cut
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
