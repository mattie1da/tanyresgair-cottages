import styles from './styles.module.css';

export default function Tag({ name, type }) {
  return (
    <div className={`${styles.wrapper} ${type === 'info' ? styles.info : ''}`}>
      { name }
    </div>
  )
}
