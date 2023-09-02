import style from './app.module.css'
import { Header } from './component/Header'
import { Main } from './component/Main'

const App = () => {
  return (
    <div className={style.app}>
      <h1 className={style.title_1}>App</h1>
      <Header />
      <Main />
      <Main />
    </div>
  )
}
export default App
