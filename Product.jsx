import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addToCart } = useCart();

  return (
    <section className="product-detail-section" style={{ padding: '15vh 8vw', display: 'flex', gap: '50px' }}>
      <div style={{ flex: 1 }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '16px', maxHeight: '700px', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1, paddingTop: '30px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{product.name}</h1>
        <div style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '30px' }}>${product.price}</div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
          Masterfully crafted, this {product.name} defines modern sophistication. Using premium materials, it offers a breathtaking aesthetic and uncompromised comfort. Elevate your presence.
        </p>
        <button 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Product;
