import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import ava_01 from './../../../img/avatar001.jpg'
import ava_02 from './../../../img/avatar002.jpg'

const MyPosts = (props) => {
  return (
    <div className={style.post}>
      <h3 className="post__title_H33">My Posts</h3>

      <div className="add__post">
        <textarea
          className={style.post__area}
          name="newPost"
          id=""
          cols="50"
          rows="6"
          placeholder="enter your messages"
        ></textarea>
        <button className={style.post__button}>Добавить</button>
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
