import AssinaturaNewsletter from "./components/AssinaturaNewsletter";
import Instrucoes from "./components/Instrucoes";
import Menu from "./components/Menu";
import PlantasOfertas from "./components/PlantasOfertas";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <AssinaturaNewsletter />
      <Instrucoes />
      <PlantasOfertas />
    </main>
  );
}
