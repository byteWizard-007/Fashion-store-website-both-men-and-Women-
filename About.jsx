const About = () => {
  return (
    <section className="text-page-section">
      <h1>About LUXORA STUDIO</h1>
      <p>
        LUXORA STUDIO was born from a singular vision: to challenge the conventions of modern fashion by blending cinematic storytelling with ultra-premium apparel. We believe clothing is the purest expression of identity.
      </p>
      <p style={{ color: 'var(--text-secondary)' }}>
        Founded in 2025, our mission is to source the finest materials globally, employing visionary designers to create ready-to-wear collections and haunting couture pieces. We embrace absolute creative control, ensuring that our final output is a high-end luxury brand experience you will never forget.
      </p>

      {/* Personal Branding Section */}
      <div className="personal-branding">
        <h2>Designed & Developed by [SIVA GANESH]</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Merging a profound passion for high-fashion aesthetics with cutting-edge frontend development.
          Every pixel is crafted to deliver a seamless, cinematic, and premium user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
