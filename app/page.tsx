'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <div className="nav__logo">REA<span className="nav__logo-accent"> General Contractors</span></div>
          <a href="tel:9564292507" className="nav__phone">(956) 429-2507</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__bg-shape hero__bg-shape--1"></div>
        <div className="hero__bg-shape hero__bg-shape--2"></div>
        <div className="hero__bg-shape hero__bg-shape--3"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">McAllen, TX &mdash; Est. in Excellence</p>
          <h1 className="hero__h1">Built to Last.<br /><span className="hero__h1-accent">Crafted with Pride.</span></h1>
          <p className="hero__sub">Residential &amp; commercial construction, remodeling, and project management — delivered with uncompromising quality across the Rio Grande Valley.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Get a Free Estimate</a>
            <a href="#services" className="btn btn--ghost">Our Services</a>
          </div>
        </div>
        <div className="hero__scroll-hint">&#8595; Scroll</div>
      </section>

      {/* TRUST */}
      <section id="trust" className="trust">
        <div className="container">
          <div className="trust__grid">
            <div className="trust__badge">
              <span className="trust__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="trust__rating-num">5.0</span>
              <span className="trust__rating-label">Average Rating</span>
            </div>
            <div className="trust__divider"></div>
            <div className="trust__stat">
              <span className="trust__stat-num">16</span>
              <span className="trust__stat-label">Verified Reviews</span>
            </div>
            <div className="trust__divider"></div>
            <div className="trust__stat">
              <span className="trust__stat-num">100%</span>
              <span className="trust__stat-label">Client Satisfaction</span>
            </div>
            <div className="trust__divider"></div>
            <div className="trust__stat">
              <span className="trust__stat-num">RGV</span>
              <span className="trust__stat-label">Locally Rooted</span>
            </div>
          </div>
          <p className="trust__proof">Trusted by homeowners and businesses throughout McAllen, Edinburg, Mission, and the greater Rio Grande Valley.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Build</p>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-sub">From ground-up construction to precision remodeling, we handle every phase of your project with expert craftsmanship.</p>
          </div>
          <div className="services__grid">
            <div className="service-card">
              <div className="service-card__icon">&#9632;</div>
              <h3 className="service-card__title">General Contracting</h3>
              <p className="service-card__desc">Full-scope construction management for residential and commercial builds. We coordinate every trade, timeline, and material to deliver your project on budget and on schedule.</p>
              <a href="#contact" className="service-card__link">Inquire &rarr;</a>
            </div>
            <div className="service-card service-card--accent">
              <div className="service-card__icon">&#9650;</div>
              <h3 className="service-card__title">Remodeling &amp; Renovation</h3>
              <p className="service-card__desc">Transform your existing space with high-quality remodeling solutions. Kitchens, bathrooms, additions, and full-home renovations executed with precision and care.</p>
              <a href="#contact" className="service-card__link">Inquire &rarr;</a>
            </div>
            <div className="service-card">
              <div className="service-card__icon">&#9670;</div>
              <h3 className="service-card__title">Project Management</h3>
              <p className="service-card__desc">End-to-end project oversight from planning to punch-list. Our experienced managers keep your build organized, on track, and stress-free from day one to completion.</p>
              <a href="#contact" className="service-card__link">Inquire &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__layout">
            <div className="about__visual">
              <div className="about__geo about__geo--1"></div>
              <div className="about__geo about__geo--2"></div>
              <div className="about__geo about__geo--3"></div>
              <div className="about__geo-label">McAllen, TX</div>
            </div>
            <div className="about__content">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="section-title">Built on the Values<br />of the Rio Grande Valley</h2>
              <p className="about__body">REA General Contractors LLC was founded with a singular mission: to bring world-class construction quality to the homes and businesses of South Texas. Based at 3600 N McColl Rd in the heart of McAllen, we are a locally owned firm with deep roots in the community we serve.</p>
              <p className="about__body">Every project we undertake is a reflection of our commitment to craftsmanship, integrity, and client partnership. We don't just build structures — we build lasting relationships with every homeowner and business owner who trusts us with their vision.</p>
              <div className="about__pillars">
                <div className="about__pillar">
                  <span className="about__pillar-icon">&#10003;</span>
                  <span>Transparent Pricing</span>
                </div>
                <div className="about__pillar">
                  <span className="about__pillar-icon">&#10003;</span>
                  <span>On-Time Delivery</span>
                </div>
                <div className="about__pillar">
                  <span className="about__pillar-icon">&#10003;</span>
                  <span>Quality Guarantee</span>
                </div>
                <div className="about__pillar">
                  <span className="about__pillar-icon">&#10003;</span>
                  <span>Local Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Client Words</p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="testimonial-card__quote">&ldquo;REA General Contractors completely transformed our home. The team was professional, timely, and the craftsmanship is absolutely outstanding. I couldn't be happier with the results — it exceeded every expectation we had.&rdquo;</blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">M</div>
                <div>
                  <div className="testimonial-card__name">Maria G.</div>
                  <div className="testimonial-card__location">McAllen, TX</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="testimonial-card__quote">&ldquo;We hired REA for our commercial renovation and they delivered on every promise. The project management was flawless — clear communication, no surprises, and the finished space looks incredible. Highly recommend to any business owner.&rdquo;</blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">C</div>
                <div>
                  <div className="testimonial-card__name">Carlos R.</div>
                  <div className="testimonial-card__location">Edinburg, TX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta-section">
        <div className="cta-section__bg-shape"></div>
        <div className="container cta-section__inner">
          <p className="cta-section__eyebrow">Ready to Build?</p>
          <h2 className="cta-section__title">Your Project Starts<br />With One Call</h2>
          <p className="cta-section__sub">Contact REA General Contractors today for a free consultation and estimate. No obligation — just expert advice from your local construction professionals.</p>
          <a href="tel:9564292507" className="btn btn--gold btn--large">(956) 429-2507</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Find Us</p>
            <h2 className="section-title">Contact &amp; Location</h2>
          </div>
          <div className="contact__grid">
            <div className="contact__info">
              <div className="contact__item">
                <span className="contact__item-icon">&#9679;</span>
                <div>
                  <div className="contact__item-label">Business Name</div>
                  <div className="contact__item-value">REA General Contractors LLC</div>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__item-icon">&#9679;</span>
                <div>
                  <div className="contact__item-label">Address</div>
                  <div className="contact__item-value">3600 N McColl Rd<br />McAllen, TX 78501, USA</div>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__item-icon">&#9679;</span>
                <div>
                  <div className="contact__item-label">Phone</div>
                  <a href="tel:9564292507" className="contact__item-value contact__phone-link">(956) 429-2507</a>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__item-icon">&#9679;</span>
                <div>
                  <div className="contact__item-label">Service Areas</div>
                  <div className="contact__item-value">McAllen, Edinburg, Mission, Pharr, and the Rio Grande Valley</div>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__item-icon">&#9679;</span>
                <div>
                  <div className="contact__item-label">Rating</div>
                  <div className="contact__item-value">&#9733;&#9733;&#9733;&#9733;&#9733; 5.0 (16 reviews)</div>
                </div>
              </div>
            </div>
            <div className="contact__map-placeholder">
              <div className="contact__map-inner">
                <div className="contact__map-geo contact__map-geo--1"></div>
                <div className="contact__map-geo contact__map-geo--2"></div>
                <div className="contact__map-geo contact__map-geo--3"></div>
                <div className="contact__map-pin">&#9679;</div>
                <div className="contact__map-label">3600 N McColl Rd<br />McAllen, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__logo">REA General Contractors LLC</div>
          <div className="footer__copy">&copy; {new Date().getFullYear()} REA General Contractors LLC. All rights reserved. McAllen, TX 78501</div>
        </div>
      </footer>
    </>
  );
}
