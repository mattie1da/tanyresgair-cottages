import styles from './styles.module.css';

export default function Carousel({ count }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>+{count} photos</button>
    </div>
  )
}
