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
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 7,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        }
        this._state.profilePage.newPostText = ''
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
        break

      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)
        break

      case SEND_MESSAGE:
        const body = this._state.dialogsPage.newMessageBody
        this._state.dialogsPage.messages.push({ id: 7, message: body })
        this._state.dialogsPage.newMessageBody = ''
        this._callSubscriber(this._state)
        break

      case UPDATE_NEW_MESSAGE_BODY:
        this._state.dialogsPage.newMessageBody = action.newBody
        this._callSubscriber(this._state)
        break

      default:
        break
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
})
window.store = store
