import styles from "./PlantasOfertas.module.css";

export default function PlantasOfertas() {
  return (
    <section className={styles.container}>
      <p>Conheça nossas</p>
      <h2>Ofertas</h2>
      <ul className={styles.listaOfertas}>
        <li className={styles.card}>
          <img src="/produto-01.svg" alt="Planta para venda" />
          <div>
            <h5>Ajuga reptans</h5>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="/seta.svg" alt="Seta de compras" />
            </button>
          </div>
        </li>
        <li className={styles.card}>
          <img src="/produto-02.svg" alt="Planta para venda" />
          <div>
            <h5>Cordyline fruticosa</h5>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="/seta.svg" alt="Seta de compras" />
            </button>
          </div>
        </li>
        <li className={styles.card}>
          <img src="/produto-03.svg" alt="Planta para venda" />
          <div>
            <h5>Ajuga reptans</h5>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="/seta.svg" alt="Seta de compras" />
            </button>
          </div>
        </li>
        <li className={styles.card}>
          <img src="/produto-04.svg" alt="Planta para venda" />
          <div>
            <h5>Ajuga reptans</h5>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="/seta.svg" alt="Seta de compras" />
            </button>
          </div>
        </li>
        <li className={styles.card}>
          <img src="/produto-05.svg" alt="Planta para venda" />
          <div>
            <h5>Ajuga reptans</h5>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="/seta.svg" alt="Seta de compras" />
            </button>
          </div>
        </li>
        <li className={styles.card}>
          <img src="/produto-06.svg" alt="Planta para venda" />
          <div>
            <h5>Ajuga reptans</h5>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="/seta.svg" alt="Seta de compras" />
            </button>
          </div>
        </li>
      </ul>
    </section>
  )
}