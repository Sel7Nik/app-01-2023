import style from './nav.module.css'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.list__item}>
          <a className={style.list__link} href="http://">
            Profile
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="http://">
            Messages
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="http://">
            News
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="http://">
            Music
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="http://">
            Setting
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
