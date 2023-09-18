import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

export const MyPostsContainer = (props) => {
  const { posts, newPostText } = props
  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  const onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  return <MyPosts updateNewPostText={onPostChange} onAddPost={addPost} posts={posts} newPostText={newPostText} />
}
