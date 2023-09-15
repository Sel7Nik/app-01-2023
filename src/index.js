import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { state, addPost, updateNewPostText, subscribe } from './redux/state'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
  )
}

renderEntireTree()

subscribe(renderEntireTree)
