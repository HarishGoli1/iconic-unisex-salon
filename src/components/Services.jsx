import React from 'react';

const SERVICES = [
  {
    category: 'Hair',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6"/>
        <path d="M9 12H3"/>
        <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12"/>
      </svg>
    ),
    headline: 'Precision Cuts & Artistry',
    description:
      'Master-level haircuts tailored to your bone structure, lifestyle, and personal vision. Every strand considered.',
    tags: ['Custom Cut', 'Layers', 'Textured Finish'],
  },
  {
    category: 'Colour',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="13" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="10" cy="18.5" r="2.5"/>
        <path d="M7.5 5C5.567 5 4 6.567 4 8.5S5.567 12 7.5 12"/>
      </svg>
    ),
    headline: 'Colour Alchemy',
    description:
      'Bespoke colour transformations — from luminous balayage to rich, vivid hues crafted to elevate your identity.',
    tags: ['Balayage', 'Global Colour', 'Highlights'],
  },
  {
    category: 'Skin',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4.5 8-11.8A8 8 0 004 10.2C4 17.5 12 22 12 22z"/>
      </svg>
    ),
    headline: 'Radiant Skin Rituals',
    description:
      'Advanced facials and targeted skincare protocols using clinical-grade actives for a visibly luminous complexion.',
    tags: ['Deep Cleanse', 'Glow Facial', 'Anti-Ageing'],
  },
  {
    category: 'Grooming',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/>
      </svg>
    ),
    headline: "Gentleman\u2019s Grooming",
    description:
      'Refined grooming rituals for the modern man — beard shaping, classic cuts, and signature hot-towel experiences.',
    tags: ['Beard Art', 'Classic Shave', 'Scalp Ritual'],
  },
  {
    category: 'Treatments',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    headline: 'Restorative Treatments',
    description:
      'Deep-nourishing hair spa, keratin, botox, and scalp therapies that restore vitality and lasting brilliance.',
    tags: ['Keratin', 'Hair Spa', 'Scalp Therapy'],
  },
  {
    category: 'Bridal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    headline: 'Bridal & Occasion',
    description:
      'Curated bridal packages for your most sacred moments — from the rehearsal through the reception, flawlessly perfected.',
    tags: ['Bridal Makeup', 'Mehendi Styling', 'Full Package'],
  },
  {
    category: 'Makeup',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    ),
    headline: 'Artistry & Glamour',
    description:
      'Professional makeup artistry for every occasion — editorials, events, or everyday luxury enhancement.',
    tags: ['Party Glam', 'Natural Look', 'HD Makeup'],
  },
  {
    category: 'Signature',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.7 5.5 6 .87-4.35 4.24 1.03 5.99L12 17l-5.38 2.6 1.03-5.99L3.3 9.37l6-.87L12 3z"/>
      </svg>
    ),
    headline: 'The Iconic Experience',
    description:
      'Our signature full-transformation package — a curated journey of colour, cut, treatment, and style in one immersive session.',
    tags: ['Full Transformation', 'VIP Treatment'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-misty relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="ornament mb-4 reveal" data-delay="0">Our Services</div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-5 reveal"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-delay="100"
          >
            Curated for the
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #A8813E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discerning Few
            </span>
          </h2>
          <p
            className="text-smoke text-lg max-w-2xl mx-auto leading-relaxed reveal"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-delay="200"
          >
            Each service is an art form. We treat every client as a canvas — our skilled
            artisans deliver results that transcend the ordinary.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.category}
              className="reveal-scale group relative rounded-2xl overflow-hidden cursor-default"
              data-delay={i * 60}
              style={{
                background: 'rgba(253,252,248,0.85)',
                border: '1px solid rgba(201,169,110,0.15)',
                boxShadow: '0 2px 20px rgba(44,44,44,0.05)',
                transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(44,44,44,0.10), 0 4px 16px rgba(201,169,110,0.12)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 20px rgba(44,44,44,0.05)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)';
              }}
            >
              {/* Top accent */}
              <div
                className="h-[2px] w-full"
                style={{ background: 'linear-gradient(90deg, #C9A96E, #EDD9A3, #C9A96E)', opacity: 0.5 }}
              />
              <div className="p-7">
                {/* Category label */}
                <p
                  className="section-label mb-4"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem' }}
                >
                  {svc.category}
                </p>
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-gold transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(201,169,110,0.1)', color: '#C9A96E' }}
                >
                  {svc.icon}
                </div>
                {/* Headline */}
                <h3
                  className="text-lg font-bold text-charcoal mb-3 leading-snug"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {svc.headline}
                </h3>
                {/* Description */}
                <p
                  className="text-smoke text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {svc.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] px-2.5 py-1 rounded-full uppercase tracking-wider font-medium"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        background: 'rgba(201,169,110,0.1)',
                        color: '#A8813E',
                        border: '1px solid rgba(201,169,110,0.2)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="text-center mt-14 reveal" data-delay="200">
          <a href="#contact" className="btn-gold inline-block">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
