import styles from './styles.module.css';

export default function Perks({perks}) {
  return (
    <ul className={styles.wrapper}>
      { perks.map(perk => 
        <li className={styles.item}>
          <svg className={styles.icon} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0001 30.8908L19.0159 30.8734M3.16675 12.6667C12.6667 5.54166 25.3334 5.54166 34.8334 12.6667M7.91675 19C14.2501 14.25 23.7501 14.25 30.0834 19M13.4584 24.5417C17.0209 22.325 20.9792 22.325 24.5417 24.5417" stroke="#003704" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* <span>{perk.icon}</span> */}
          <span>{perk.text}</span>
        </li>
      )}
    </ul>
  )
}
