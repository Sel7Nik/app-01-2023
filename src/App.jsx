import style from './app.module.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Profile from './components/Profile'

export const App = () => {
  return (
    <div className={style.appWrapper}>
      <Header />
      <Nav />
      <Profile />
    </div>
  )
}
