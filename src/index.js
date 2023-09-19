import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { store } from './redux/redux-store'
import { Provider } from './Provider'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

renderEntireTree(store.getState())

store.subscribe(() => {
  renderEntireTree(store.getState())
})
