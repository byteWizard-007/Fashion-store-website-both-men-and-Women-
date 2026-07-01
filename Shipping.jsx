import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Shipping = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="text-page-section" ref={pageRef} style={{ minHeight: '70vh' }}>
      <h1 style={{ marginBottom: '30px' }}>Shipping & Returns</h1>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
        <h3 style={{ margin: '20px 0 10px', color: 'var(--text-primary)' }}>Shipping Info</h3>
        <p>We offer global shipping. All orders are processed within 2-3 business days. Delivery times vary according to destination.</p>
        
        <h3 style={{ margin: '30px 0 10px', color: 'var(--text-primary)' }}>Returns Policy</h3>
        <p>If you are not completely satisfied with your purchase, it may be returned within 14 days of receipt for a full refund or exchange, provided it is unworn and in original condition.</p>
      </div>
    </div>
  );
};

export default Shipping;
