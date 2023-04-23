import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import menuImg from "../assets/menu.png";
import { useState } from "react";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const clickMenu = () => {
    setClicked(!clicked);
  };

  const menuStyle = {
    display: clicked ? "block" : "none",
    transition: "1s",
  };
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.link} href="/">
          <h1 className={styles.name}>Loja Virtual</h1>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link className={styles.link} href="/">
              <p>Produtos</p>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/carrinho">
              <p>Carrinho</p>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/sobre">
              <p>Sobre</p>
            </Link>
          </li>
        </ul>
        <button onClick={clickMenu} className={styles.BTN}>
          <Image src={menuImg} width="30px" height="30px" />
        </button>
      </nav>

      <div style={menuStyle} className={styles.ContainerMenu}>
        <ul>
          <li>
            <Link className={styles.link} href="/">
              <p>Produtos</p>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/carrinho">
              <p>Carrinho</p>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/sobre">
              <p>Sobre</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
