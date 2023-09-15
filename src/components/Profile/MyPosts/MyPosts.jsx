import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import ava_01 from './../../../img/avatar001.jpg'
import ava_02 from './../../../img/avatar002.jpg'

const MyPosts = (props) => {
  const newPostElement = React.createRef()

  // const { posts, addPost } = props

  const addPost = () => {
    props.addPost()
  }
  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={style.post}>
      <h3 className="post__title_H33">My Posts</h3>

      <div className="add__post">
        <textarea
          className={style.post__area}
          onChange={onPostChange}
          name="newPost"
          ref={newPostElement}
          value={props.newPostText}
          cols="50"
          rows="6"
          placeholder="enter your messages"
        />
        <button className={style.post__button} onClick={addPost}>
          Добавить
        </button>
        <button className={style.post__button}>Удалить</button>
      </div>
      <ul className={style.post__list}>
        {props.posts.map((p) => (
          <Post message={p.message} avatar={ava_02} likesCount={p.likesCount} key={p.id} />
        ))}
      </ul>
    </div>
  )
}

export default MyPosts
