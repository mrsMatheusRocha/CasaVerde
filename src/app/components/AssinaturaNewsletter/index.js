import styles from "./Newsletter.module.css";

export default function AssinaturaNewsletter() {
  return (
    <section className={styles.container}>
      <p className={styles.startText}>Sua casa com as</p>
      <h2 className={styles.subtitle}>melhores plantas</h2>
      <p>
        Encontre aqui uma vasta seleção de plantas
        para decorar a sua casa e torná-lo uma pessoa mais 
        feliz no seu dia a dia. Entre com seu e-mail e 
        assine nossa newsletter para saber das novidades 
        da marca.
      </p>
      <div>
        <form className={styles.formNewsletter}>
          <input placeholder="Insira seu e-mail" className={styles.inputEmail} type="email"/>
          <button className={styles.buttonInput}>
            Assinar newsletter
          </button>
        </form>
      </div>
    </section>
  );
}