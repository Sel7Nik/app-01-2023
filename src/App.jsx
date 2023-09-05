import style from './app.module.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import logo from './img/logo.svg'

export const App = () => {
  return (
    // так можно задать класс с тире
    <div className={style['app__wrapper']}>
      <Header logo={logo} />
      <Nav />
      <Profile />
    </div>
  )
}
