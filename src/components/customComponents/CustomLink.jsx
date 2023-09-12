import { NavLink, useMatch } from 'react-router-dom'
import styles from './customLink.module.css'

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to)
  const active = `${styles.activeLink} ${styles.link}`
  const notActive = styles.link
  const setСlassActive = (activeClass) => (activeClass.isActive ? active : notActive)
  return (
    <NavLink className={setСlassActive} to={to} style={{ color: match ? 'red' : 'white' }} {...props}>
      {/* // <NavLink className={setСlassActive} to={to} {...props}> */}
      {children}
    </NavLink>
  )
}

export { CustomLink }
