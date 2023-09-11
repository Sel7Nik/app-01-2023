import style from './profileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
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
    </div>
  )
}

export { ProfileInfo }
