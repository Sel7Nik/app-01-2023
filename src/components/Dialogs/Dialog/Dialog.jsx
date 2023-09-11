import { NavLink } from 'react-router-dom'
import styles from './dialog.module.css'

const Dialog = (props) => {
  const path = '/dialogs/' + props.id
  const name = props.name
  const active = `${styles.activeLink} ${styles.dialog__link}`
  const notActive = styles.dialog__link
  const setСlassActive = (activeClass) => (activeClass.isActive ? active : notActive)
  return (
    <li className={styles.dialog__item}>
      <NavLink className={setСlassActive} to={path}>
        {name}
      </NavLink>
    </li>
  )
}

export { Dialog }
