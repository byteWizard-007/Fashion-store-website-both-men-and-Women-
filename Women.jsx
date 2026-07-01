import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Women = () => {
  const womenProducts = products.filter(p => p.category === 'Women');

  return (
    <>
      <header className="page-header">
        <h1>Women's Collection</h1>
        <p>Elegant, bold, and unapologetically visionary.</p>
      </header>

      <section className="collection-container">
        <aside className="filters">
          <div className="filter-group">
            <h4>Category</h4>
            <label className="filter-item"><input type="checkbox" /> Dresses</label>
            <label className="filter-item"><input type="checkbox" /> Tops</label>
            <label className="filter-item"><input type="checkbox" /> Skirts</label>
            <label className="filter-item"><input type="checkbox" /> Outerwear</label>
            <label className="filter-item"><input type="checkbox" /> Accessories</label>
          </div>
          <div className="filter-group">
            <h4>Price</h4>
            <label className="filter-item"><input type="checkbox" /> Under $150</label>
            <label className="filter-item"><input type="checkbox" /> $150 - $400</label>
            <label className="filter-item"><input type="checkbox" /> Over $400</label>
          </div>
        </aside>

        <div className="products-wrapper">
          <div className="products-grid">
            {womenProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Women;
