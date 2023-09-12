import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import ava_01 from './../../../img/avatar001.jpg'
import ava_02 from './../../../img/avatar002.jpg'

const postsData = [
  { id: 1, name: 'post 22', likesCount: 22 },
  { id: 2, name: 'post 44', likesCount: 32 },
  { id: 3, name: 'post 66', likesCount: 12 },
  { id: 4, name: 'post 22', likesCount: 21 },
  { id: 5, name: 'post 22', likesCount: 222 },
  { id: 6, name: 'post 22', likesCount: 252 },
]

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
        {postsData.map((p) => (
          <Post message={p.message} avatar={ava_02} likesCount={p.likesCount} />
        ))}
      </ul>
    </div>
  )
}

export default MyPost
