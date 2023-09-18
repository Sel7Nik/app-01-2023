import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
// import { store } from './redux/store'
import { store } from './redux/redux-store'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  )
}

renderEntireTree(store.getState())

store.subscribe(() => {
  renderEntireTree(store.getState())
})
