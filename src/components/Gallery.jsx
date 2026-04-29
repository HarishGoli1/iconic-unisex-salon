import React from 'react';

/* Verified high-quality Unsplash images with fallback */
const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
    caption: 'Precision Styling',
    sub: 'Hair Artistry',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    caption: 'Salon Ambience',
    sub: 'Premium Interior',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
    caption: 'Colour Craft',
    sub: 'Balayage & Highlights',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1519828209008-c17eb434082f?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    caption: 'Bridal Perfection',
    sub: 'Occasion Styling',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
    caption: 'The Gentleman',
    sub: 'Grooming & Beard',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&w=800&q=85',
    fallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    caption: 'Signature Look',
    sub: 'Complete Transformation',
    tall: false,
  },
];

const GalleryCard = ({ img }) => (
  <div
    className="group relative overflow-hidden rounded-2xl cursor-pointer reveal-scale"
    style={{
      aspectRatio: img.tall ? '3/4' : '4/3',
      background: '#E8D5B7',
      boxShadow: '0 4px 24px rgba(44,44,44,0.08)',
      transition: 'box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(44,44,44,0.18)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(44,44,44,0.08)'; }}
  >
    {/* Image */}
    <img
      src={img.src}
      alt={img.caption}
      loading="lazy"
      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      onError={(e) => { e.target.src = img.fallback; }}
    />
    {/* Hover overlay */}
    <div
      className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'linear-gradient(0deg, rgba(44,44,44,0.7) 0%, rgba(44,44,44,0.15) 60%, transparent 100%)' }}
    >
      <p
        className="text-[0.6rem] tracking-[0.2em] uppercase mb-1"
        style={{ fontFamily: 'Inter, sans-serif', color: '#EDD9A3' }}
      >
        {img.sub}
      </p>
      <h4
        className="text-white text-lg font-semibold leading-tight"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {img.caption}
      </h4>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-28 bg-soft-beige relative overflow-hidden" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="ornament mb-4 reveal" style={{ justifyContent: 'flex-start' }} data-delay="0">
              Portfolio
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal reveal"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-delay="100"
            >
              Moments of{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Transformation
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-outline-gold shrink-0 reveal"
            data-delay="200"
          >
            Book Your Look
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <GalleryCard key={i} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
