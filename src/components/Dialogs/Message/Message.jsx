import { NavLink } from 'react-router-dom'
import styles from './message.module.css'

const Message = (props) => {
  return <li className={styles.message__item}>{props.message}</li>
}

export { Message }
