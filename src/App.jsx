import style from './app.module.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import Profile from './components/Profile/Profile'
import Setting from './components/Setting/Setting'
import logo from './img/logo.svg'
import UsersContainer from './components/Users/UsersContainer'

export const App = () => {
  return (
    // так можно задать класс с тире
    <div className={style['app__wrapper']}>
      <Header logo={logo} />
      <Nav />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          {/* <Route path="/music" element={<Dialogs />} /> */}
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  )
}
