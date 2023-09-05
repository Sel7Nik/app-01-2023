import style from './nav.module.css'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={`${style.list__item} ${style.active}`}>
          <a className={style.list__link} href="/profile">
            Profile
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="/dialogs">
            Messages
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="/news">
            News
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="music">
            Music
          </a>
        </li>
        <li className={style.list__item}>
          <a className={style.list__link} href="setting">
            Setting
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
