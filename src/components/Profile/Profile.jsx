import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  const { posts, dispatch, newPostText } = props
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer posts={posts} newPostText={newPostText} dispatch={dispatch} />
      {/* <MyPosts posts={posts} newPostText={newPostText} /> */}
    </>
  )
}

export default Profile
