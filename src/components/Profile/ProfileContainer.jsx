import { Component } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from './../../redux/profile-reducer'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

class ProfileContainer extends Component {
  componentDidMount() {
    const profileId = Number(Object.values(this.props.router.params))
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then((response) => {
      this.props.setUserProfile(response.data)
    })
  }

  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))
