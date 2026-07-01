import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Privacy = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="text-page-section" ref={pageRef} style={{ minHeight: '70vh' }}>
      <h1 style={{ marginBottom: '30px' }}>Privacy Policy</h1>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
        <p>Your privacy is important to us. This policy details how we collect, use, and handle your information. We do not sell your personal data to third parties.</p>
        <p style={{ marginTop: '20px' }}>We use cookies to improve your browsing experience and enhance site functionality. By continuing to use our website, you consent to our use of cookies.</p>
      </div>
    </div>
  );
};

export default Privacy;
