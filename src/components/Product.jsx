import { Link } from "react-router";

export default function Product({ product }) {
  return (
    <Link to="/products/detail" className="product-card-link">
      <article className="product-card">
        <img src={product.image} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">DKK {product.price}</p>
          <span className={`product-stock  ${product.inStock ? "in-stock" : "out-of-stock"}`}>
            {product.inStock ? "På lager" : "Udsolgt"}
          </span>
        </div>
      </article>
    </Link>
  );
}
