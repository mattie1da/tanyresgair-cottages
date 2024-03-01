import Image from "next/image";
import Stars from "../../components/stars";
import styles from './styles.module.css';

export default function Hero({ title, subtitle }) {
  return (
    <section className={styles.wrapper}>
      <Image
        className={styles.image}
        src="/exterior/cottages.jpg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <aside className={styles.imageOverlay} />
      <div className={`${styles.content} l-container l-container--thin`}>
        <div className={styles.starsWrapper}>
          <Stars />
          <p>9.8</p>
        </div>
        <h1 className={styles.title}>{ title }</h1>
        <p className={styles.subtitle}>{ subtitle }</p>
      </div>
    </section>
  )
}