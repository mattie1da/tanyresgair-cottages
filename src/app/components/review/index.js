import Stars from "../stars";
import styles from './styles.module.css';

export default function Review({ quote, name }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.quote}>&ldquo;{ quote }&rdquo;</p>
      <div className={styles.footer}>
        <p className={styles.author}>{ name }</p>
        <div className={styles.stars}>
          <Stars />
        </div>
      </div>
    </div>
  )
}
