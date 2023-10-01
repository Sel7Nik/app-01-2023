import { Preloader } from '../../commonComponents/Preloader/Preloader'
import style from './profileInfo.module.css'

export const ProfileInfo = (props) => {
  if (!props.profile) return Preloader
  return (
    <div>
      <img
        className={style.bg__img}
        src="https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg"
        alt="flowers"
      />
      <div className={style.avatar}>
        <img src={props.profile.photos.large} alt="avatar" />

        <div className={style.description}>
          <h2 className={style.name}>{props.profile.fullName}</h2>
          <p className={style.text}>{props.profile.aboutMe}</p>
          <img src={props.profile.photos.small} alt="avatar" />
        </div>
      </div>
    </div>
  )
}
