import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import ava_01 from './../../../img/avatar001.jpg'
import ava_02 from './../../../img/avatar002.jpg'

const MyPost = () => {
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
        <Post message="post 2" avatar={ava_02} likesCount={32} />
        <Post message="post 33" avatar={ava_01} likesCount={33} />
        <Post message="post 11" avatar={ava_01} likesCount={27} />
      </ul>
    </div>
  )
}

export default MyPost
