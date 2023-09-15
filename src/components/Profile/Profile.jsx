import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
// import style from './profile.module.css'
const Profile = (props) => {
  const { posts, addPost, newPostText, updateNewPostText } = props
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText} />
    </>
  )
}

export default Profile
