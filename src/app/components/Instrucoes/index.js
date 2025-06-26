import styles from "./Instrucoes.module.css";

export default function Instrucoes() {
  return (
    <section className={styles.container}>
      <img src="/plants.svg" alt="Plantas verde escuro"/>
      <div className={styles.innerContainer}>
        <p className={styles.startPhrase}>Como conseguir</p>
        <h6 className={styles.boldPhrase}>minha planta</h6>

        <ul>
          <li>
            <img src="/yellowball.svg" alt="Bola amarela"/>
            <p>
              Escolha sua plantas
            </p>
          </li>
          <li>
            <img src="/yellowball.svg" alt="Bola amarela"/>
            <p>
              Faça seu pedido
            </p>
          </li>
          <li>
            <img src="/yellowball.svg" alt="Bola amarela"/>
            <p>
              Aguarde na sua casa
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
};