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

  getState() {
    return this._state
  },

  _callSubscriber() {},

  addPost() {
    let newPost = {
      id: 7,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }
    this._state.profilePage.newPostText = ''
    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
}

window.store = store
