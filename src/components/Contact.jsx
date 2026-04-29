import React, { useState } from 'react';

const SERVICES_LIST = [
  'Hair Cut & Styling',
  'Colour & Highlights',
  'Hair Treatment',
  'Skin & Facials',
  'Grooming',
  'Makeup & Glamour',
  'Bridal Package',
  'Other',
];

const WA_NUMBER = '919876543210';
const PHONE     = '+91 98765 43210';
const ADDRESS   = 'Lila Nilayam 1079/5, 22nd Main Rd, A Block, Sahakar Nagar, Bengaluru, Karnataka 560092';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Iconic Salon! 👋%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 bg-ivory relative overflow-hidden">
      {/* Ambient accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,232,228,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="ornament mb-4 reveal" data-delay="0">Get in Touch</div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal reveal"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-delay="100"
          >
            Visit{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A96E, #A8813E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Iconic
            </span>
          </h2>
          <p
            className="text-smoke text-lg mt-4 max-w-xl mx-auto reveal"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-delay="200"
          >
            We are ready to craft your next transformation. Reach out and let&apos;s
            create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
          {/* ── Info Panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Location card */}
            <div
              className="rounded-2xl p-7 reveal-left"
              style={{
                background: 'rgba(253,252,248,0.9)',
                border: '1px solid rgba(201,169,110,0.18)',
                boxShadow: '0 4px 32px rgba(44,44,44,0.06)',
              }}
            >
              <h3
                className="text-xl font-bold text-charcoal mb-5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Location
              </h3>
              {/* Address */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(201,169,110,0.12)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p className="text-smoke text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{ADDRESS}</p>
              </div>
              {/* Phone */}
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 mb-4 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(201,169,110,0.12)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11.39a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <span className="text-smoke text-sm group-hover:text-gold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{PHONE}</span>
              </a>
              {/* Timing */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(201,169,110,0.12)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span className="text-smoke text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Mon – Sun, 10:00 AM – 8:00 PM</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 reveal-left"
              style={{
                background: '#25D366',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.522 4.004 1.438 5.695L0 24l6.474-1.414A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.784 9.784 0 01-5.017-1.374l-.36-.214-3.732.815.843-3.636-.235-.374A9.783 9.783 0 012.18 12C2.18 6.56 6.56 2.18 12 2.18c5.44 0 9.82 4.38 9.82 9.82 0 5.44-4.38 9.818-9.82 9.818z"/></svg>
              Chat on WhatsApp
            </a>

            {/* Google Maps placeholder */}
            <div
              className="rounded-2xl overflow-hidden reveal-left"
              style={{ height: 200, border: '1px solid rgba(201,169,110,0.18)' }}
            >
              <iframe
                title="Iconic Salon Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://maps.google.com/maps?q=Sahakar+Nagar+Bengaluru&output=embed"
              />
            </div>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-3 reveal-right">
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: 'rgba(253,252,248,0.9)',
                border: '1px solid rgba(201,169,110,0.18)',
                boxShadow: '0 8px 48px rgba(44,44,44,0.07)',
              }}
            >
              <h3
                className="text-2xl font-bold text-charcoal mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Book Your Experience
              </h3>
              <p className="text-smoke text-sm mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Fill in your details and we&apos;ll connect on WhatsApp to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] tracking-widest uppercase text-smoke" style={{ fontFamily: 'Inter, sans-serif' }}>Full Name</label>
                    <input
                      type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="px-4 py-3.5 rounded-xl text-sm text-charcoal placeholder-mist outline-none transition-all duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        background: 'rgba(245,239,230,0.6)',
                        border: '1px solid rgba(201,169,110,0.2)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#C9A96E'; e.target.style.background = 'rgba(255,255,255,0.9)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(201,169,110,0.2)'; e.target.style.background = 'rgba(245,239,230,0.6)'; }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] tracking-widest uppercase text-smoke" style={{ fontFamily: 'Inter, sans-serif' }}>Phone Number</label>
                    <input
                      type="tel" name="phone" required
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="px-4 py-3.5 rounded-xl text-sm text-charcoal placeholder-mist outline-none transition-all duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        background: 'rgba(245,239,230,0.6)',
                        border: '1px solid rgba(201,169,110,0.2)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#C9A96E'; e.target.style.background = 'rgba(255,255,255,0.9)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(201,169,110,0.2)'; e.target.style.background = 'rgba(245,239,230,0.6)'; }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] tracking-widest uppercase text-smoke" style={{ fontFamily: 'Inter, sans-serif' }}>Service of Interest</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="px-4 py-3.5 rounded-xl text-sm text-charcoal outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      background: 'rgba(245,239,230,0.6)',
                      border: '1px solid rgba(201,169,110,0.2)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#C9A96E'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(201,169,110,0.2)'; }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] tracking-widest uppercase text-smoke" style={{ fontFamily: 'Inter, sans-serif' }}>Message</label>
                  <textarea
                    name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your desired look or any questions you have..."
                    className="px-4 py-3.5 rounded-xl text-sm text-charcoal placeholder-mist outline-none transition-all duration-300 resize-none"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      background: 'rgba(245,239,230,0.6)',
                      border: '1px solid rgba(201,169,110,0.2)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#C9A96E'; e.target.style.background = 'rgba(255,255,255,0.9)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(201,169,110,0.2)'; e.target.style.background = 'rgba(245,239,230,0.6)'; }}
                  />
                </div>

                <button type="submit" className="btn-gold mt-2 text-center">
                  {sent ? '✓ Sending to WhatsApp…' : 'Send via WhatsApp'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
