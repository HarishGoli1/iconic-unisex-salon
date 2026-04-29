import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-28 bg-ivory relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(244,232,228,0.35) 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Image Column ── */}
          <div className="relative reveal-left">
            {/* Primary image */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                aspectRatio: '4/5',
                boxShadow: '0 24px 80px rgba(44,44,44,0.12)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=90"
                alt="Iconic Salon Interior"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=90';
                }}
              />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-8 rounded-2xl p-5 reveal-scale animate-float"
              style={{
                background: 'rgba(253,252,248,0.92)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(201,169,110,0.2)',
                boxShadow: '0 8px 40px rgba(44,44,44,0.12)',
                width: 180,
                animationDelay: '1.5s',
              }}
            >
              <p
                className="text-4xl font-bold mb-1"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                10+
              </p>
              <p
                className="text-[0.65rem] text-smoke uppercase tracking-wider leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Years Crafting<br />Iconic Looks
              </p>
            </div>

            {/* Gold frame accent */}
            <div
              className="absolute top-8 -right-4 w-full h-full rounded-3xl -z-10"
              style={{ border: '2px solid rgba(201,169,110,0.2)' }}
            />
          </div>

          {/* ── Content Column ── */}
          <div>
            <div className="ornament mb-5 reveal" style={{ justifyContent: 'flex-start' }} data-delay="0">
              Our Story
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-7 leading-tight reveal"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-delay="100"
            >
              Born from a Passion
              <br />
              for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Perfection
              </span>
            </h2>

            <p
              className="text-smoke text-lg leading-relaxed mb-5 reveal"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-delay="150"
            >
              Iconic Unisex Salon was founded on a singular belief — that every person
              deserves a salon experience that makes them feel extraordinary. Not just
              seen. Not just styled. <em>Transformed.</em>
            </p>
            <p
              className="text-smoke text-base leading-relaxed mb-10 reveal"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-delay="200"
            >
              Nestled in the heart of Sahakar Nagar, Bengaluru, our salon is a
              sanctuary where cutting-edge technique meets timeless elegance. From the
              moment you enter to the final reveal, every step is curated around you.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-10 reveal" data-delay="250">
              {[
                { v: '5k+', l: 'Happy Clients' },
                { v: '15+', l: 'Expert Artisans' },
                { v: '4.9★', l: 'Average Rating' },
              ].map((m) => (
                <div
                  key={m.l}
                  className="text-center py-5 rounded-xl"
                  style={{
                    background: 'rgba(253,252,248,0.8)',
                    border: '1px solid rgba(201,169,110,0.18)',
                  }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {m.v}
                  </p>
                  <p
                    className="text-[0.65rem] text-smoke uppercase tracking-wider"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {m.l}
                  </p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold inline-block reveal" data-delay="300">
              Experience Iconic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
