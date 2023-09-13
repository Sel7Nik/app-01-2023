import style from './app.module.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { Dialogs } from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import Setting from './components/Setting/Setting'
import logo from './img/logo.svg'

export const App = (props) => {
  const { messagesData, dialogsData, postsData } = props.state
  return (
    // так можно задать класс с тире
    <div className={style['app__wrapper']}>
      <Header logo={logo} />
      <Nav />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile posts={postsData} />} />
          <Route path="/dialogs/*" element={<Dialogs messages={messagesData} dialogs={dialogsData} />} />
          {/* <Route path="/news" element={<Profile />} /> */}
          {/* <Route path="/music" element={<Dialogs />} /> */}
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  )
}
