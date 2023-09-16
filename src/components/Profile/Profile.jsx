import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  const { posts, dispatch, newPostText } = props
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
      {/* <MyPosts posts={posts} newPostText={newPostText} /> */}
    </>
  )
}

export default Profile
