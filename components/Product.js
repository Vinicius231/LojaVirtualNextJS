import styles from "../styles/Home.module.css";
import Carrinho from "@/pages/carrinho";
import {useState, useEffect} from 'react'

export default function Product(props) {
  const [carrinho,setCarrinho] = useState({
    produto: [
      {
        id: '1',
        produto: 'Nada2'
      }
    ]
  })
  const comprar = ()=> {
    carrinho.produto.push({
      id: carrinho.produto.length +1,
      produto: props.name
    })
    console.log(carrinho)
  }

  return (
    <>
      <div className={styles.product}>
        <div className={styles.containerImg}>
          <img src={props.image} alt="sapato" />
        </div>
        <h1>{props.name}</h1>
        <p>R$ {props.price}</p>
        <button onClick={comprar} className={styles.BTNCompra}>Adicionar no Carrinho</button>
      </div>
    </>
  );
}
