import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => dispatch(addPostActionCreator()),

    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
