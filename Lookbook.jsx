import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Lookbook = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="page-header" ref={pageRef} style={{ height: '70vh', background: 'var(--primary-bg)' }}>
      <h1>Lookbook</h1>
      <p style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--text-secondary)' }}>
        Discover the visual narrative of our upcoming seasons. (Content coming soon)
      </p>
    </div>
  );
};

export default Lookbook;
