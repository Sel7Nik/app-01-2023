const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const initialState = {
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
}
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const stateCopy = { ...state }
      stateCopy.messages = [...state.messages]
      const body = stateCopy.newMessageBody
      stateCopy.messages.push({ id: 7, message: body })
      // stateCopy.newMessageBody = ''
      console.log(stateCopy)
      return stateCopy
    }

    case UPDATE_NEW_MESSAGE_BODY: {
      const stateCopy = { ...state }
      stateCopy.newMessageBody = action.newBody
      console.log(stateCopy)
      return stateCopy
    }

    default:
      return state
  }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
})
