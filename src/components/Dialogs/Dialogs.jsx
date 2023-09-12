// import { NavLink } from 'react-router-dom'
import styles from './dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'

const dialogsData = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Viktor' },
  { id: 3, name: 'Olga' },
  { id: 4, name: 'Nik' },
  { id: 5, name: 'Sergey' },
  { id: 6, name: 'Elena' },
]

const messagesData = [
  { id: 1, message: 'Lorem  adipisicing elit.' },
  { id: 2, message: 'Ipsum dolor sit amet adipisicing elit.' },
  { id: 3, message: 'Dolor sit amet adipisicing elit.' },
  { id: 4, message: 'Lorem  adipisicing elit.' },
  { id: 5, message: 'Dolor sit amet adipisicing elit.' },
  { id: 6, message: 'Ipsum dolor sit amet adipisicing elit.' },
]

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogs__list}>
        {dialogsData.map((d) => (
          <Dialog id={d.id} name={d.name} />
        ))}
      </ul>

      <ul className={styles.messages__list}>
        {messagesData.map((m) => (
          <Message id={m.id} message={m.message} />
        ))}
      </ul>
    </div>
  )
}
export { Dialogs }
