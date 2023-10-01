import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} id={props.id} />
      <MyPostsContainer />
    </>
  )
}

export default Profile
