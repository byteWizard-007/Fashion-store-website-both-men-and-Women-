import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Fade in animation
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  const glassStyle = {
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    padding: '40px',
    borderRadius: '20px',
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section style={{
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #fdfbf7 0%, #e6e6e6 100%)',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Contact Us</h1>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          For inquiries regarding bespoke pieces, general questions, or editorial features, please connect with us.
        </p>
      </section>

      {/* Split Layout Section */}
      <section style={{ 
        padding: '80px 8vw', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '60px',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'start'
      }}>
        
        {/* Left: Contact Form */}
        <div style={glassStyle} className="contact-form-card">
          <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{
                width: '100%', padding: '15px', borderRadius: '10px', 
                border: '1px solid var(--glass-border)', 
                background: 'rgba(255,255,255,0.7)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                outline: 'none',
                transition: 'var(--transition)'
              }} 
              onFocus={(e) => { e.target.style.background = '#fff'; e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; e.target.style.borderColor = 'var(--text-primary)'; }}
              onBlur={(e) => { e.target.style.background = 'rgba(255,255,255,0.7)'; e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'var(--glass-border)'; }}
              />
            </div>
            
            <div className="input-group">
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{
                width: '100%', padding: '15px', borderRadius: '10px', 
                border: '1px solid var(--glass-border)', 
                background: 'rgba(255,255,255,0.7)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                outline: 'none',
                transition: 'var(--transition)'
              }} 
              onFocus={(e) => { e.target.style.background = '#fff'; e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; e.target.style.borderColor = 'var(--text-primary)'; }}
              onBlur={(e) => { e.target.style.background = 'rgba(255,255,255,0.7)'; e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'var(--glass-border)'; }}
              />
            </div>

            <div className="input-group">
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block' }}>Message</label>
              <textarea placeholder="How can we help you?" rows="5" style={{
                width: '100%', padding: '15px', borderRadius: '10px', 
                border: '1px solid var(--glass-border)', 
                background: 'rgba(255,255,255,0.7)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                outline: 'none',
                resize: 'none',
                transition: 'var(--transition)'
              }}
              onFocus={(e) => { e.target.style.background = '#fff'; e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; e.target.style.borderColor = 'var(--text-primary)'; }}
              onBlur={(e) => { e.target.style.background = 'rgba(255,255,255,0.7)'; e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'var(--glass-border)'; }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px 0' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Get in Touch</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: '1.8' }}>
              We'd love to hear from you. Our friendly team is always here to chat and guide you through our bespoke services.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Email */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                <Mail size={24} color="var(--text-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: 'var(--text-secondary)' }}>inquiries@luxorastudio.com</p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                <Phone size={24} color="var(--text-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Phone</h4>
                <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 000-0000</p>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                <MapPin size={24} color="var(--text-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Atelier Location</h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  123 Fashion Ave, Suite 400<br/>
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;
