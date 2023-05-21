import styles from "../styles/Carrinho.module.css";
import infoProduct from "./api/infoProduct.json";

export default function carrinho() {
  return (
    <div className={styles.container}>
        
      <div className={styles.produtoCarrinho}>
        <h1>Carrinho</h1>
        <div className={styles.carrinho}>
          <div className={styles.product}>
            <div className={styles.containerImg}>
              <img src={infoProduct[1].image} alt="sapato" />
            </div>
            <h1>{infoProduct[1].product}</h1>
            <p>R$ {infoProduct[1].price}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
