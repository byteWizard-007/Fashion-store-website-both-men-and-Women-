import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section style={{ padding: '15vh 10vw' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>Your Cart.</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>
          <div>
            {cart.map(item => (
              <div key={item.cartId} style={{ display: 'flex', gap: '20px', padding: '20px', background: 'var(--glass-bg)', borderRadius: '16px', marginBottom: '20px' }}>
                <img src={item.image} alt={item.name} style={{ width: '120px', height: '150px', objectFit: 'cover', borderRadius: '12px' }}/>
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.cartId)} style={{ background: 'none', border: 'none', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>&times;</button>
              </div>
            ))}
          </div>
          <div style={{ padding: '30px', background: 'var(--glass-bg)', borderRadius: '20px', height: 'max-content' }}>
            <h3 style={{ marginBottom: '20px' }}>Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}><span>Total</span> <span>${total}</span></div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Cart;
