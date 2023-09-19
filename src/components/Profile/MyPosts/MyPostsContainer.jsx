import { StoreContext } from '../../../redux/StoreContext'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const { posts, newPostText } = store.getState().profilePage
        const { dispatch } = store
        const addPost = () => {
          dispatch(addPostActionCreator())
        }
        const onPostChange = (text) => {
          dispatch(updateNewPostTextActionCreator(text))
        }
        return <MyPosts updateNewPostText={onPostChange} onAddPost={addPost} posts={posts} newPostText={newPostText} />
      }}
    </StoreContext.Consumer>
  )
}
