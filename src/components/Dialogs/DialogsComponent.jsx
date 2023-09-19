import { StoreContext } from '../../redux/StoreContext'
import { Dialogs } from './Dialogs'
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'

export const DialogsComponent = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const { messages, newMessageBody, dialogs } = store.getState().dialogsPage
        const { dispatch } = store
        const addNewMessage = () => {
          dispatch(sendMessageCreater())
        }
        const updateMessageChange = (body) => {
          dispatch(updateNewMessageBodyCreator(body))
        }
        return (
          <Dialogs
            addMessage={addNewMessage}
            updateMessageChange={updateMessageChange}
            messages={messages}
            newMessageBody={newMessageBody}
            dialogs={dialogs}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}
