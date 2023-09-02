import style from './profile.module.css'

const Profile = () => {
  return (
    <main className={style.main}>
      <img
        className={style.bg__img}
        src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg"
        alt="flowers"
      />

      <div className={style.avatar}>
        <img src="https://gocsgo.net/wp-content/uploads/2022/01/69.jpg" alt="avatar" />

        <div className={style.description}>
          <h2 className={style.name}>NikName</h2>
        </div>
      </div>

      <div className="posts">
        <h3 className="title__h3">My Posts</h3>

        <div className="add__post">New post</div>
        <div className="post">
          <div className="post1">post 1</div>
          <div className="post2">post 2</div>
          <div className="post3">post 3</div>
        </div>
      </div>
    </main>
  )
}

export default Profile
