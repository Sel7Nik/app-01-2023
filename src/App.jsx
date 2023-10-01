import style from './app.module.css'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import Setting from './components/Setting/Setting'
import logo from './img/logo.svg'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'

export const App = () => {
  return (
    // так можно задать класс с тире
    <div className={style['app__wrapper']}>
      <HeaderContainer logo={logo} />
      <Nav />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  )
}
