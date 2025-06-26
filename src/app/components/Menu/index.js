import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <img src="/logo.svg" width={177} />
        <ul className={styles.listaLinks}>
          <li className={styles.links}>
            <a href="/">Como fazer</a>
          </li>
          <li>
            /
          </li>
          <li className={styles.links}>
            <a href="/">Ofertas</a>
          </li>
          <li>
            /
          </li>
          <li className={styles.links}>
            <a href="/">Depoimentos</a>
          </li>
          <li>
            /
          </li>
          <li className={styles.links}>
            <a href="/">Vídeos</a>
          </li>
          <li>
            /
          </li>
          <li className={styles.links}>
            <a href="/">Meu carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}