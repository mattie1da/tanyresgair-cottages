import Button from '../button';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={`${styles.inner} l-container l-container--thin`}>
        <ul className={styles.links}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Cottages</a></li>
          <li><a href="/">Location</a></li>
          <li><a href="/">Gallery</a></li>
        </ul>

        <ul className={styles.links}>
          <li><a href="#">+44 (0)1974 251517</a></li>
          <li><Button /></li>
        </ul>
      </nav>
    </header>
  )
}
