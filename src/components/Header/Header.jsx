import { NavLink } from 'react-router-dom'
import style from './header.module.css'

const Header = (props) => {
  // debugger
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img className={style.logo__img} src={props.logo} alt="logo" />
      </div>

      <div className={style.login}>
        <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>
      </div>
    </header>
  )
}

export default Header
