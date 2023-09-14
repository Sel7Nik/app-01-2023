import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  const { posts, addPost } = props
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} />
    </>
  )
}

export default Profile
