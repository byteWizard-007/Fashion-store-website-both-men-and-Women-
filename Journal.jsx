import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Journal = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="page-header" ref={pageRef} style={{ height: '70vh', background: 'var(--primary-bg)' }}>
      <h1>Journal</h1>
      <p style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--text-secondary)' }}>
        Explore our latest editorials, interviews, and behind-the-scenes insights. (Content coming soon)
      </p>
    </div>
  );
};

export default Journal;
