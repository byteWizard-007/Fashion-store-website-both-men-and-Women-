import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'url(https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop) center/cover' }}>
      <div style={{ background: 'rgba(255,255,255,0.7)', padding: '50px', borderRadius: '20px', backdropFilter: 'blur(20px)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2>Welcome Back</h2>
        <p style={{ marginBottom: '30px' }}>Log in to your account</p>
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #ccc' }}/>
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #ccc' }}/>
        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '15px' }}>Sign In</button>
        <p>Don't have an account? <Link to="/signup" style={{ fontWeight: 'bold' }}>Sign up</Link></p>
      </div>
    </div>
  );
};
export default Login;
