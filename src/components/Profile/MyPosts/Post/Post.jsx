import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.post__item}>
      <img className={style.item__img} src={props.avatar} alt="miniava" />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
