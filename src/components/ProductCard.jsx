import { ProductCardStyled } from "../StyledComponents/Prodcuts";

export default function ProductCard({ product }) {
  return (
    <ProductCardStyled>
      <div className="product-card">
        <div className="product-picture">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-name">
          <span>{product.title}</span>
        </div>

        <div className="price-container">
          <label>{product.price} CHF</label>
        </div>
      </div>
    </ProductCardStyled>
  );
}
