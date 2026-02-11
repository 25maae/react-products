import Product from "./Product";
import { products } from "../data";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
  return (
    <section className={styles["product-grid"]}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
