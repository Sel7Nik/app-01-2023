import style from './app.module.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { Dialogs } from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import Setting from './components/Setting/Setting'
import logo from './img/logo.svg'

export const App = (props) => {
  const { messages, dialogs } = props.state.dialogsPage
  const { posts, newPostText } = props.state.profilePage
  const { dispatch } = props
  return (
    // так можно задать класс с тире
    <div className={style['app__wrapper']}>
      <Header logo={logo} />
      <Nav />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile dispatch={dispatch} posts={posts} newPostText={newPostText} />} />
          <Route path="/dialogs/*" element={<Dialogs messages={messages} dialogs={dialogs} />} />
          {/* <Route path="/news" element={<Profile />} /> */}
          {/* <Route path="/music" element={<Dialogs />} /> */}
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  )
}
