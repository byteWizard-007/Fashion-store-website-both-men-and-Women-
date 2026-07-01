import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Designers = () => {
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(headerRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.querySelector('.zigzag-image');
          const content = entry.target.querySelector('.designer-glass-card');
          
          if (entry.target.classList.contains('reverse')) {
            gsap.fromTo(image, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' });
            gsap.fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 });
          } else {
            gsap.fromTo(image, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' });
            gsap.fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 });
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

  const glassStyle = {
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '50px 40px',
    borderRadius: '24px',
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
    position: 'relative',
    zIndex: 2,
    marginLeft: '-50px'
  };

  const glassStyleReverse = {
    ...glassStyle,
    marginLeft: 0,
    marginRight: '-50px'
  };

  return (
    <>
      <div className="page-header" ref={headerRef} style={{ height: '50vh', background: 'linear-gradient(to bottom, #fdfbf7, #e8e8e8)' }}>
        <h1 style={{ fontSize: '5rem', textTransform: 'uppercase', letterSpacing: '8px' }}>The Visionaries</h1>
        <p style={{ maxWidth: '700px', margin: '20px auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          Meet the minds crafting the future of fashion. Independent creators translating untold stories into masterful garments.
        </p>
      </div>

      {/* Designer 1 */}
      <section className="zigzag-section" ref={addToRefs} style={{ padding: '150px 8vw', position: 'relative' }}>
        <div className="zigzag-image" style={{ height: '80vh', borderRadius: '0' }}>
          <img src="/@fs/C:/Users/shiav/.gemini/antigravity/brain/1629b44c-40e3-47c8-a2f8-cadb666d8bd1/designer_one_1775835296004.png" alt="Elena Velez" />
        </div>
        <div className="zigzag-content">
          <div className="designer-glass-card" style={glassStyle}>
            <span className="tag">Avant-Garde Tailoring</span>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Amelia Rostova</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              Amelia's work dismantles traditional silhouettes to reconstruct them for the modern era. 
              Drawing inspiration from industrial architecture and fluid dynamics, her collections are both a paradox of rigid structure and soft elegance.
              A true visionary in sustainable yet aggressive luxury.
            </p>
            <Link to="/products" className="btn btn-outline" style={{ marginTop: '20px' }}>View Pieces</Link>
          </div>
        </div>
      </section>

      {/* Designer 2 */}
      <section className="zigzag-section reverse" ref={addToRefs} style={{ padding: '150px 8vw', position: 'relative' }}>
        <div className="zigzag-image" style={{ height: '80vh', borderRadius: '0' }}>
          <img src="/@fs/C:/Users/shiav/.gemini/antigravity/brain/1629b44c-40e3-47c8-a2f8-cadb666d8bd1/designer_two_1775835313147.png" alt="Yohji Style Designer" />
        </div>
        <div className="zigzag-content">
          <div className="designer-glass-card" style={glassStyleReverse}>
            <span className="tag">Minimalist Dystopia</span>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Kaelen Vance</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              Kaelen operates in the shadows of high fashion. Utilizing an entirely monochromatic palette, 
              he focuses on exquisite drapery, oversized proportions, and anti-fit designs that challenge the wearer to embrace comfort as a form of rebellion.
            </p>
            <Link to="/products" className="btn btn-outline" style={{ marginTop: '20px' }}>View Pieces</Link>
          </div>
        </div>
      </section>

      {/* Designer 3 */}
      <section className="zigzag-section" ref={addToRefs} style={{ padding: '150px 8vw', position: 'relative', marginBottom: '100px' }}>
        <div className="zigzag-image" style={{ height: '80vh', borderRadius: '0' }}>
          <img src="/@fs/C:/Users/shiav/.gemini/antigravity/brain/1629b44c-40e3-47c8-a2f8-cadb666d8bd1/designer_three_1775835329155.png" alt="Contemporary Designer" />
        </div>
        <div className="zigzag-content">
          <div className="designer-glass-card" style={glassStyle}>
            <span className="tag">Neo-Romanticism</span>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Soren Wright</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              A prodigy of contemporary tailoring. Soren blends hyper-feminine elements with masculine tailoring to create gender-fluid masterpieces. 
              His atelier is known for immaculate tailoring, sheer fabrics, and hidden details that only the wearer can truly appreciate.
            </p>
            <Link to="/products" className="btn btn-outline" style={{ marginTop: '20px' }}>View Pieces</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Designers;
