import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

export const MyPostsContainer = (props) => {
  const { posts, newPostText } = props.store.getState().profilePage
  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }
  return <MyPosts updateNewPostText={onPostChange} onAddPost={addPost} posts={posts} newPostText={newPostText} />
}
