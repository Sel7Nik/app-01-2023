import style from './header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img
          className={style.logo__img}
          src={'https://upload.wikimedia.org/wikipedia/commons/1/13/LOGO_OF_LOGO.svg'}
          alt="logo"
        />
      </div>
    </header>
  )
}

export default Header
