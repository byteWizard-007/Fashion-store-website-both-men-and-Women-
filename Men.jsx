import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Men = () => {
  const menProducts = products.filter(p => p.category === 'Men');

  return (
    <>
      <header className="page-header">
        <h1>Men's Collection</h1>
        <p>Redefining masculinity through sophisticated tailoring.</p>
      </header>

      <section className="collection-container">
        <aside className="filters">
          <div className="filter-group">
            <h4>Category</h4>
            <label className="filter-item"><input type="checkbox" /> Shirts</label>
            <label className="filter-item"><input type="checkbox" /> Jeans</label>
            <label className="filter-item"><input type="checkbox" /> Jackets</label>
            <label className="filter-item"><input type="checkbox" /> Suits</label>
            <label className="filter-item"><input type="checkbox" /> Footwear</label>
          </div>
          <div className="filter-group">
            <h4>Price</h4>
            <label className="filter-item"><input type="checkbox" /> Under $100</label>
            <label className="filter-item"><input type="checkbox" /> $100 - $300</label>
            <label className="filter-item"><input type="checkbox" /> Over $300</label>
          </div>
        </aside>

        <div className="products-wrapper">
          <div className="products-grid">
            {menProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Men;
