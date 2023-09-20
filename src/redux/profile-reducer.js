const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  posts: [
    { id: 1, message: 'post 99 987654 qwerty', likesCount: 22 },
    { id: 2, message: 'post 44', likesCount: 32 },
    { id: 3, message: 'post 66', likesCount: 12 },
    { id: 4, message: ' Lorem ipsum dolor sit amet. ', likesCount: 21 },
    { id: 5, message: ' Lorem ipsum dolor sit. ', likesCount: 222 },
    { id: 6, message: 'post 22 lorem ', likesCount: 252 },
  ],
  newPostText: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: state.newPostText,
        likesCount: 0,
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})
