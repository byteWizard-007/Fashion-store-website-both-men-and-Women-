import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Terms = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="text-page-section" ref={pageRef} style={{ minHeight: '70vh' }}>
      <h1 style={{ marginBottom: '30px' }}>Terms & Conditions</h1>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
        <p>By using this website, you agree to be bound by our Terms and Conditions. These terms apply to all visitors, users, and others who access or use the Service.</p>
        <p style={{ marginTop: '20px' }}>Our store is hosted on a secure server. Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice.</p>
      </div>
    </div>
  );
};

export default Terms;
