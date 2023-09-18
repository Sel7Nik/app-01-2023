import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  const { store } = props
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </>
  )
}

export default Profile
