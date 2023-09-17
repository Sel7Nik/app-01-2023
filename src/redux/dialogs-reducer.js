const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = state.newMessageBody
      state.messages.push({ id: 7, message: body })
      state.newMessageBody = ''
      return state

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newBody
      return state

    default:
      return state
  }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
})
