import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export let store = {
  _state: {
    dialogsPage: {
      messages: [
        { id: 1, message: 'Lorem  adipisicing elit.' },
        { id: 2, message: 'Ipsum dolor sit amet adipisicing elit.' },
        { id: 3, message: 'Dolor sit amet adipisicing elit.' },
        { id: 4, message: 'Lorem  adipisicing elit.' },
        { id: 5, message: 'Dolor sit amet adipisicing elit.' },
        { id: 6, message: 'Ipsum dolor sit amet adipisicing elit.' },
      ],
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Viktor' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Nik' },
        { id: 5, name: 'Sergey' },
        { id: 6, name: 'Elena' },
      ],
      newMessageBody: '',
    },

    profilePage: {
      posts: [
        { id: 1, message: 'post 99 987654 qwerty', likesCount: 22 },
        { id: 2, message: 'post 44', likesCount: 32 },
        { id: 3, message: 'post 66', likesCount: 12 },
        { id: 4, message: ' Lorem ipsum dolor sit amet. ', likesCount: 21 },
        { id: 5, message: ' Lorem ipsum dolor sit. ', likesCount: 222 },
        { id: 6, message: 'post 22 lorem ', likesCount: 252 },
      ],
      newPostText: '',
    },
    sidebar: {},
  },
  _callSubscriber() {},

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
    this._callSubscriber(this._state)
  },
}

window.store = store
