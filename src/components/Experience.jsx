import React from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'Refined Ambience',
    body: 'Step into a space designed to calm the senses. Curated lighting, bespoke interiors, and an unhurried atmosphere that tells you — this is different.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Personalised Mastery',
    body: 'Every session begins with a one-on-one consultation. We listen deeply, study your features, and design a look that is unmistakably yours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'World-Class Products',
    body: 'We partner exclusively with luxury international brands. Your hair, skin, and wellbeing deserve nothing less than the world\'s finest formulations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Expert Artisans',
    body: 'Our team trains continuously with leading academies worldwide. Their precision, passion, and craft elevate every visit into an experience.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zM20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zM3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14zM14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5zM15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5zM8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Hygiene Assured',
    body: 'Impeccable sanitation at every station. Single-use tools, sterilised equipment, and rigorous protocols guarantee your complete peace of mind.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4.5 8-11.8A8 8 0 004 10.2C4 17.5 12 22 12 22z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Unhurried Luxury',
    body: 'Time is the ultimate luxury. We honour yours. Unhurried sessions, undivided attention, and a pace that allows you to genuinely unwind.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-ivory">
      {/* Decorative blob */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,232,228,0.7) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="ornament mb-4 reveal" data-delay="0" style={{ justifyContent: 'flex-start' }}>
            The Experience
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 reveal"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-delay="100"
          >
            Beyond a Visit.{' '}
            <em
              className="not-italic"
              style={{
                background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Journey.
            </em>
          </h2>
          <p
            className="text-smoke text-lg leading-relaxed reveal"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-delay="200"
          >
            Every detail at Iconic is considered, every touchpoint elevated. We have
            reimagined what a salon visit can feel like — and the result is extraordinary.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((p, i) => (
            <div
              key={p.number}
              className="reveal group"
              data-delay={i * 80}
              style={{
                borderRadius: 20,
                padding: '2rem',
                border: '1px solid rgba(201,169,110,0.14)',
                background: 'rgba(253,252,248,0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 24px rgba(44,44,44,0.05)',
                transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(44,44,44,0.10)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 24px rgba(44,44,44,0.05)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.14)';
              }}
            >
              {/* Number + Icon row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(135deg, rgba(201,169,110,0.25), rgba(201,169,110,0.08))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {p.number}
                </span>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(201,169,110,0.12)', color: '#C9A96E' }}
                >
                  {p.icon}
                </div>
              </div>
              {/* Content */}
              <h3
                className="text-xl font-bold text-charcoal mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {p.title}
              </h3>
              <p
                className="text-smoke text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
