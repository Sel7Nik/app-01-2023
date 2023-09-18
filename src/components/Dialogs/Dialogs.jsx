import styles from './dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
  const onAddMessage = () => {
    props.addMessage()
  }

  const onChangeMessage = (event) => {
    const body = event.currentTarget.value
    props.updateMessageChange(body)
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
            onChange={onChangeMessage}
            name=""
            value={props.newMessageBody}
            id=""
            cols="50"
            rows="6"
            placeholder="enter your messages"
          ></textarea>
        </div>
        <div>
          <button onClick={onAddMessage}>SEND</button>
        </div>
      </div>
    </div>
  )
}
