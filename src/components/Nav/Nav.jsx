import { Route, Routes, NavLink } from 'react-router-dom'
import style from './nav.module.css'

const setActive = ({ isActive }) => (isActive ? style['active-link'] : style.list__link)

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={`${style.list__item}`}>
          <NavLink className={setActive} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink className={setActive} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink className={setActive} to="/news">
            News
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink className={setActive} to="/music">
            Music
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink className={setActive} to="/setting">
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
