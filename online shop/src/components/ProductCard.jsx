export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-picture">
        <img src={product.image} alt="Product picture" />

        <div className="product-name">
          <span>{product.title}</span>
        </div>
      </div>
      <div className="price-add-container">
        <div ClassName="product-price">
          <p>{product.price} CHF</p>
        </div>
        <div ClassName="add-to-cart-button">
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
