export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-picture">
        <img src={product.image} alt={product.title} />

        <div className="product-name">
          <span>{product.title}</span>
        </div>
      </div>
      <div className="price-add-container">
        <div className="product-price">
          <label>{product.price} CHF</label>
        </div>
        <div ClassName="add-to-cart-button">
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
