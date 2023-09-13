// import { NavLink } from 'react-router-dom'
import styles from './dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'

const Dialogs = (props) => {
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
    </div>
  )
}
export { Dialogs }
