import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  const {} = props
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  )
}

export default Profile
