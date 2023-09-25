import style from './nav.module.css'
import { CustomLink } from './../customComponents/CustomLink'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={`${style.list__item}`}>
          <CustomLink to="/profile">Profile</CustomLink>
        </li>
        <li className={style.list__item}>
          <CustomLink to="/dialogs/">Messages</CustomLink>
        </li>
        <li className={style.list__item}>
          <CustomLink to="/users">Users</CustomLink>
        </li>
        {/* <li className={style.list__item}>
          <CustomLink to="/music">Music</CustomLink>
        </li> */}
        <li className={style.list__item}>
          <CustomLink to="/setting">Setting</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
