import { Dialogs } from './Dialogs'
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'

export const DialogsComponent = (props) => {
  const { messages, newMessageBody, dialogs } = props.store.getState().dialogsPage
  const addNewMessage = () => {
    props.store.dispatch(sendMessageCreater())
  }

  const updateMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
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
}
