import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <button
      className={styles.customButton}
      onClick={() => {
        props.unFollow(props.user)
      }}
    >
      {props.children}
    </button>
  )
}

export default Button
