import styles from "../styles/Home.module.css";
import Product from "../components/Product";
import infoProduct from "./api/infoProduct.json";
import { useState } from "react";

export default function Home() {
  const [array, setArray] = useState(infoProduct);

  return (
    <main className={styles.container}>
      {array.map((el, i) => {
        return (
          <Product
            key={i}
            name={infoProduct[i].product}
            price={infoProduct[i].price}
            image={array[i].image}
          />
        );
      })}
    </main>
  );
}
