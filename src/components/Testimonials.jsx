import React from 'react';

const REVIEWS = [
  {
    name: 'Priya Sharma',
    role: 'Fashion Stylist, Bengaluru',
    rating: 5,
    quote:
      'Walking into Iconic feels like stepping into a five-star resort. My hair has never looked or felt this good. The consultation alone changed how I think about my style.',
  },
  {
    name: 'Rahul Menon',
    role: 'Entrepreneur',
    rating: 5,
    quote:
      'The grooming experience here is in a different league. They are precise, unhurried, and genuinely care about the outcome. I won\'t go anywhere else.',
  },
  {
    name: 'Ananya Iyer',
    role: 'Bride, Dec 2024',
    rating: 5,
    quote:
      'They made my bridal look completely my own. I cried happy tears when I saw myself in the mirror. The team is warm, talented, and exceptionally professional.',
  },
  {
    name: 'Kiran Desai',
    role: 'Corporate Professional',
    rating: 5,
    quote:
      'I have visited salons across Mumbai and Bengaluru. Iconic stands out — the attention to detail, the quality of products, and the overall experience are unmatched.',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#C9A96E', fontSize: '0.9rem' }}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-28 bg-misty relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5EFE6 0%, #FDFCF8 100%)' }}>
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,232,228,0.6) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament mb-4 reveal" data-delay="0">Client Stories</div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal reveal"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-delay="100"
          >
            Words From Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Clients
            </span>
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="reveal group"
              data-delay={i * 80}
              style={{
                borderRadius: 20,
                padding: '2.25rem',
                background: 'rgba(253,252,248,0.85)',
                border: '1px solid rgba(201,169,110,0.15)',
                boxShadow: '0 2px 24px rgba(44,44,44,0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(44,44,44,0.1)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 24px rgba(44,44,44,0.05)';
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)';
              }}
            >
              {/* Opening quote */}
              <div
                className="text-5xl leading-none mb-4 font-bold"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  background: 'linear-gradient(135deg, rgba(201,169,110,0.4), rgba(201,169,110,0.15))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                "
              </div>
              <StarRating count={r.rating} />
              <p
                className="text-charcoal-soft text-[1.0125rem] leading-relaxed mb-7 italic"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                {r.quote}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C9A96E, #A8813E)' }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p
                    className="text-charcoal font-semibold text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-mist text-[0.7rem] tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9E9490' }}
                  >
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
