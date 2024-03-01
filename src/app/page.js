import styles from "./page.module.css";
import Hero from "./sections/hero";
import Cottages from "./sections/cottages";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        title="Tanyresgair Cottages"
        subtitle="Two dog-friendly self-catering holiday cottages in a recent barn conversion, set in a stunning location in mid Wales, on the farm Tanyresgair."
      />
      <Cottages />
    </main>
  );
}
