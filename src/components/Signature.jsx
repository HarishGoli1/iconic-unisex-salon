import React from 'react';

const SIGNATURE = [
  {
    title: 'Bespoke Consultation',
    body: 'Every visit begins with an in-depth styling consultation. We analyse your features, hair texture, lifestyle, and vision to create a personalised strategy.',
    icon: '✦',
  },
  {
    title: 'Luxury Formulations',
    body: 'Only the world\'s finest colour, care, and treatment products touch your hair. We partner with elite international brands for results that last.',
    icon: '◈',
  },
  {
    title: 'Modern Styling Techniques',
    body: 'Our artisans are trained in the latest global techniques — from lived-in balayage to architectural cuts that define your entire look.',
    icon: '◉',
  },
  {
    title: 'Immersive Ambience',
    body: 'Curated lighting, bespoke music, and thoughtfully designed interiors create an atmosphere that calms, inspires, and elevates.',
    icon: '◬',
  },
];

const Signature = () => {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C2C2C 0%, #3E3E3E 60%, #2C2C2C 100%)',
      }}
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-3 mb-5 reveal"
            data-delay="0"
          >
            <span className="h-[1px] w-8" style={{ background: 'linear-gradient(90deg, transparent, #C9A96E)' }} />
            <span
              className="text-[0.6875rem] tracking-[0.22em] uppercase font-medium"
              style={{ fontFamily: 'Inter, sans-serif', color: '#EDD9A3' }}
            >
              What Sets Us Apart
            </span>
            <span className="h-[1px] w-8" style={{ background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 reveal"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-delay="100"
          >
            The Iconic{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #EDD9A3 0%, #C9A96E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Difference
            </span>
          </h2>
          <p
            className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed reveal"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-delay="200"
          >
            In a world full of ordinary, we chose extraordinary. Here is what makes
            every Iconic experience genuinely unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE.map((item, i) => (
            <div
              key={item.title}
              className="reveal group"
              data-delay={i * 80}
              style={{
                borderRadius: 20,
                padding: '2.25rem 1.75rem',
                border: '1px solid rgba(201,169,110,0.18)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201,169,110,0.08)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ color: '#C9A96E' }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/55 text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;
