import { NavLink } from 'react-router-dom'
import styles from './dialogs.module.css'
const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogs__list}>
        <li className={styles.dialog__item + ' ' + styles.active}>
          <NavLink to="/dialogs/1">Alex</NavLink>
        </li>
        <li className={styles.dialog__item}>
          {' '}
          <NavLink to="/dialogs/2">Viktor</NavLink>
        </li>
        <li className={styles.dialog__item}>
          {' '}
          <NavLink to="/dialogs/3">Olga</NavLink>
        </li>
        <li className={styles.dialog__item}>
          {' '}
          <NavLink to="/dialogs/4">Nik</NavLink>
        </li>
        <li className={styles.dialog__item}>
          {' '}
          <NavLink to="/dialogs/5">Sergey</NavLink>
        </li>
        <li className={styles.dialog__item}>
          {' '}
          <NavLink to="/dialogs/6">Elena</NavLink>
        </li>
      </ul>

      <ul className={styles.messages__list}>
        <li className={styles.message__item}>Lorem ipsum dolor sit amet consectetur elit.</li>
        <li className={styles.message__item}>Lorem ipsum dolor sit amet adipisicing elit.</li>
        <li className={styles.message__item}> ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li className={styles.message__item}>Lorem ipsum sit amet consectetur adipisicing elit.</li>
      </ul>
    </div>
  )
}

export { Dialogs }
