import styles from "./Product.module.css";

export default function Product({ product }) {
  return (
    <article className={styles["card"]}>
      <a href={product.link} className={styles["cardLink"]}>
        <img src={product.image} className={styles["image"]} />
      </a>
      <div className={styles["info"]}>
        <h2 className={styles["title"]}>{product.title}</h2>
        <p className={styles["description"]}>{product.description}</p>
        <p className={styles["price"]}>DKK {product.price}</p>
        <span
          className={`product-stock  ${product.inStock ? "in-stock" : "out-of-stock"}`}
        >
          {product.inStock ? "På lager" : "Udsolgt"}
        </span>
      </div>
    </article>
  );
}
