import { connect } from 'react-redux'
import { Users } from './Users'
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    follow: (userId) => dispatch(followAC(userId)),

    unFollow: (userId) => dispatch(unFollowAC(userId)),

    setUsers: (users) => dispatch(setUsersAC(users)),

    setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),

    setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
