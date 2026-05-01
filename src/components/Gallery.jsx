import React, { useState } from 'react';

/* ── Local gallery images ── */
import hairCuttingImg from '../assets/gallery/hair-cutting.jpg';
import hairColoringImg from '../assets/gallery/hair-coloring.jpg';
import bridalMakeupImg from '../assets/gallery/bridal-makeup.jpg';
import beardGroomingImg from '../assets/gallery/beard-grooming.jpg';

/* ─────────────────────────────────────────────
   Interactive Image Accordion — Gallery Section
   Replaces the old static grid with an immersive
   hover-expand accordion that fits the luxury brand.
───────────────────────────────────────────── */

const accordionItems = [
  {
    id: 1,
    title: 'Precision Styling',
    sub: 'Hair Artistry',
    imageUrl: hairCuttingImg,
  },
  {
    id: 2,
    title: 'Colour Craft',
    sub: 'Balayage & Highlights',
    imageUrl: hairColoringImg,
  },
  {
    id: 3,
    title: 'Bridal Perfection',
    sub: 'Occasion Styling',
    imageUrl: bridalMakeupImg,
  },
  {
    id: 4,
    title: 'The Gentleman',
    sub: 'Grooming & Beard',
    imageUrl: beardGroomingImg,
  },
];

/* ── Single Accordion Panel ── */
const AccordionPanel = ({ item, isActive, onMouseEnter }) => (
  <div
    className="relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0"
    style={{
      height: '480px',
      width: isActive ? '380px' : '68px',
      transition: 'width 0.65s cubic-bezier(0.22,1,0.36,1)',
      boxShadow: isActive
        ? '0 24px 64px rgba(44,44,44,0.28)'
        : '0 4px 20px rgba(44,44,44,0.10)',
    }}
    onMouseEnter={onMouseEnter}
  >
    {/* Background image */}
    <img
      src={item.imageUrl}
      alt={item.title}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        transform: isActive ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
      }}
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />

    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: isActive
          ? 'linear-gradient(0deg, rgba(20,14,8,0.72) 0%, rgba(20,14,8,0.15) 55%, transparent 100%)'
          : 'linear-gradient(0deg, rgba(20,14,8,0.60) 0%, rgba(20,14,8,0.35) 100%)',
        transition: 'background 0.5s ease',
      }}
    />

    {/* Active state: horizontal caption at bottom */}
    {isActive && (
      <div
        className="absolute bottom-7 left-6 right-6"
        style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.4s ease 0.2s' }}
      >
        <p
          className="text-[0.6rem] tracking-[0.22em] uppercase mb-1.5"
          style={{ fontFamily: 'Inter, sans-serif', color: '#EDD9A3' }}
        >
          {item.sub}
        </p>
        <h4
          className="text-white text-xl font-semibold leading-snug"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {item.title}
        </h4>
      </div>
    )}

    {/* Collapsed state: vertical rotated label */}
    {!isActive && (
      <div
        className="absolute inset-0 flex items-end justify-center pb-6"
        style={{ opacity: 1 }}
      >
        <span
          className="text-white text-sm font-semibold whitespace-nowrap"
          style={{
            fontFamily: 'Inter, sans-serif',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center center',
            letterSpacing: '0.12em',
          }}
        >
          {item.title}
        </span>
      </div>
    )}
  </div>
);

/* ── Gallery Section ── */
const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="gallery"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#F5EFE6' }}
    >
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
            <p
              className="mt-4 text-sm text-charcoal/60 max-w-md reveal"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-delay="200"
            >
              Hover over each panel to explore our signature services.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-outline-gold shrink-0 reveal"
            data-delay="200"
          >
            Book Your Look
          </a>
        </div>

        {/* Accordion */}
        <div className="flex flex-row items-stretch justify-center gap-3 overflow-x-auto pb-4">
          {accordionItems.map((item, index) => (
            <AccordionPanel
              key={item.id}
              item={item}
              isActive={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Bottom CTA hint */}
        <p
          className="text-center mt-10 text-[0.7rem] tracking-[0.2em] uppercase text-charcoal/40"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Hover to Explore · Touch to Expand
        </p>
       </div>
    </section>
  );
};

export default Gallery;
