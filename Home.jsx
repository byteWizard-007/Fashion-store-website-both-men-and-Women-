import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Fade in animation on load
    gsap.fromTo(heroRef.current, { scale: 1.05, filter: 'blur(10px)' }, { scale: 1, filter: 'blur(0px)', duration: 2, ease: 'power2.out' });
    gsap.fromTo(textRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: 'power3.out' });
  }, []);

  return (
    <>
      <section className="hero">
        {/* High-quality elegant editorial fashion image as requested */}
        <img 
          ref={heroRef}
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Hero" 
          className="hero-image"
        />
        {/* Subtle light grey gradient overlay */}
        <div className="hero-overlay"></div>
        <div className="hero-content" ref={textRef}>
          <h1>Redefine Your Style</h1>
          <p>Experience cinematic fashion storytelling and find pieces that define your unique identity. A new era of luxury awaits.</p>
          <div className="cta-group">
            <Link to="/men" className="btn btn-primary">Shop Men</Link>
            <Link to="/women" className="btn btn-outline">Shop Women</Link>
          </div>
        </div>
      </section>

      <section className="zigzag-section">
        <div className="zigzag-content">
          <span className="tag">Men's Collection</span>
          <h2>The Modern Gentleman</h2>
          <p>Discover our curated selection of men's premium wear. Tailored precision meets contemporary streetwear to craft a silhouette that speaks volumes without saying a word.</p>
          <Link to="/men" className="btn btn-outline" style={{ display: 'inline-block', borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, padding: '0 0 5px 0' }}>Explore Men</Link>
        </div>
        <div className="zigzag-image">
          <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1974&auto=format&fit=crop" alt="Men" />
        </div>
      </section>

      <section className="zigzag-section reverse">
        <div className="zigzag-content">
          <span className="tag">Women's Collection</span>
          <h2>Elegance in Motion</h2>
          <p>Sophistication and grace combined in our latest women's collection. Embrace the essence of femininity with sheer elegance and dramatic cuts.</p>
          <Link to="/women" className="btn btn-outline" style={{ display: 'inline-block', borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, padding: '0 0 5px 0' }}>Explore Women</Link>
        </div>
        <div className="zigzag-image">
          <img src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2097&auto=format&fit=crop" alt="Women" />
        </div>
      </section>
    </>
  );
};

export default Home;
