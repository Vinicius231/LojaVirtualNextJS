import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
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
      <button className={styles.BTN}>Button</button>
    </header>
  );
}
