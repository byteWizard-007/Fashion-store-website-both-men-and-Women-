import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Faq = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="text-page-section" ref={pageRef} style={{ minHeight: '70vh' }}>
      <h1 style={{ marginBottom: '30px' }}>Frequently Asked Questions</h1>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
        <h3 style={{ margin: '20px 0 10px', color: 'var(--text-primary)' }}>Do you ship internationally?</h3>
        <p>Yes, we ship to most countries around the world. Duty and taxes may apply.</p>
        
        <h3 style={{ margin: '30px 0 10px', color: 'var(--text-primary)' }}>How can I track my order?</h3>
        <p>Once your order has shipped, you will receive an email containing tracking information.</p>
      </div>
    </div>
  );
};

export default Faq;
