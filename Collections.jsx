import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Collections = () => {
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Scroll animation setup using IntersectionObserver to orchestrate GSAP
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.querySelector('.zigzag-image');
          const content = entry.target.querySelector('.zigzag-content');
          
          if (entry.target.classList.contains('reverse')) {
            gsap.fromTo(image, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' });
            gsap.fromTo(content, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.2 });
          } else {
            gsap.fromTo(image, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' });
            gsap.fromTo(content, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.2 });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <div className="page-header" ref={headerRef}>
        <h1>Exclusive Collections</h1>
        <p style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--text-secondary)' }}>
          Discover a curated anthology of masterful tailoring, visionary silhouettes, and avant-garde streetwear. 
          A journey through the narratives redefining luxury fashion.
        </p>
      </div>

      <section className="zigzag-section" ref={addToRefs}>
        <div className="zigzag-content">
          <span className="tag">The Blueprint</span>
          <h2>Trending Collection</h2>
          <p>
            Experience the vanguard of contemporary design. Our trending pieces fuse minimalist aesthetics 
            with complex geometric tailoring, offering garments that speak volumes through their understated elegance.  
            Perfect for the modern connoisseur seeking distinction.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/products" className="btn btn-primary">Shop The Edit</Link>
          </div>
        </div>
        <div className="zigzag-image product-card">
          <img src="/@fs/C:/Users/shiav/.gemini/antigravity/brain/1629b44c-40e3-47c8-a2f8-cadb666d8bd1/collections_trending_1775835241824.png" alt="Trending Collection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section className="zigzag-section reverse" ref={addToRefs}>
        <div className="zigzag-content">
          <span className="tag">Resort & Evening</span>
          <h2>Seasonal Epics</h2>
          <p>
            Embrace the spirit of transition. Whether it's the breezy fluidity of Summer linens, 
            the structured warmth of Winter coats, or the exquisite detailing of Festive couture, 
            our seasonal capsules adapt luxury to your environment without compromise.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/products" className="btn btn-outline" style={{ display: 'inline-block', borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, padding: '0 0 5px 0' }}>Explore Season</Link>
          </div>
        </div>
        <div className="zigzag-image product-card">
          <img src="/@fs/C:/Users/shiav/.gemini/antigravity/brain/1629b44c-40e3-47c8-a2f8-cadb666d8bd1/collections_seasonal_1775835261499.png" alt="Seasonal Collections" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section className="zigzag-section" ref={addToRefs}>
        <div className="zigzag-content">
          <span className="tag">Future Archives</span>
          <h2>Upcoming Vision</h2>
          <p>
            A glimpse into tomorrow's aesthetic. The upcoming collection explores glassmorphism concepts 
            in fabric, utilizing innovative materials and sleek, futuristic styling to create apparel 
            that is both a second skin and a statement of intent.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Arriving Fall 2026</span>
          </div>
        </div>
        <div className="zigzag-image product-card">
          <img src="/@fs/C:/Users/shiav/.gemini/antigravity/brain/1629b44c-40e3-47c8-a2f8-cadb666d8bd1/collections_upcoming_1775835278031.png" alt="Upcoming Colections" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>
      
      <div style={{ padding: '0 8vw 10vh', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>More exclusive edits joining the archive soon.</p>
      </div>
    </>
  );
};

export default Collections;
