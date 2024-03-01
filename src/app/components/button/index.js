import styles from './styles.module.css';

export default function Button({primary}) {
  return (
    <a href="#" className={`${styles.wrapper} ${primary && styles.primary}`}>
      Reserve
    </a>
  )
}
