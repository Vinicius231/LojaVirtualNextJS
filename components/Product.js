import styles from "../styles/Home.module.css";

export default function Product(props) {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.containerImg}>
          <img src={props.image} alt="sapato" />
        </div>
        <h1>{props.name}</h1>
        <p>R$ {props.price}</p>
        <button className={styles.BTNCompra}>Comprar</button>
      </div>
    </>
  );
}
