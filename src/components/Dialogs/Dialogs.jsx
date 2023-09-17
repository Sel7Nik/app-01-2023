import styles from './dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/store'

const Dialogs = (props) => {
  const addMessage = () => {
    props.dispatch(sendMessageCreater())
  }

  const onMessageChange = (event) => {
    // const body = newMessageElement.current.value
    const body = event.currentTarget.value
    props.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogs__list}>
        {props.dialogs.map((d) => (
          <Dialog id={d.id} name={d.name} key={d.id} />
        ))}
      </ul>

      <ul className={styles.messages__list}>
        {props.messages.map((m) => (
          <Message id={m.id} message={m.message} key={m.id} />
        ))}
      </ul>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            name=""
            value={props.newMessageBody}
            id=""
            cols="50"
            rows="6"
            placeholder="enter your messages"
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>SEND</button>
        </div>
      </div>
    </div>
  )
}
export { Dialogs }
