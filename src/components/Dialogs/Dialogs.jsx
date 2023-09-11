import { NavLink } from 'react-router-dom'
import styles from './dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogs__list}>
        <Dialog id="1" name="Alex" />
        <Dialog id="2" name="Viktor" />
        <Dialog id="3" name="Olga" />
        <Dialog id="4" name="Nik" />
        <Dialog id="5" name="Sergey" />
        <Dialog id="6" name="Elena" />
      </ul>

      <ul className={styles.messages__list}>
        <Message message="Lorem ipsum dolor sit amet adipisicing elit." />
        <Message message="Ipsum dolor sit amet adipisicing elit." />
        <Message message="Dolor sit amet adipisicing elit." />
      </ul>
    </div>
  )
}

export { Dialogs }
