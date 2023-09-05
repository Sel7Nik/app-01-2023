import style from './header.module.css'

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img className={style.logo__img} src={props.logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header
