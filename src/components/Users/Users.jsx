import styles from './users.module.css'
import './users.css'
import userAvatar from './../../assets/image/user-avatar.png'
import axios from 'axios'

export const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      props.setUsers(response.data.items)
    })
  }
  return (
    <div className={styles.section}>
      <h3 className={`${styles['section-title']} ${'title'}`}>Users</h3>
      {/* <h3 className={styles['section-title']}>Users</h3> */}
      {props.users.map((user) => (
        <div className={styles.users} key={user.id}>
          <span>
            <div className={styles.photo}>
              <img
                className={styles.img}
                src={user.photos.small != null ? user.photos.small : userAvatar}
                alt="img"
                style={{ widht: '35px' }}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(user.id)
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id)
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>

          <div className={styles.descr}>
            <div className={styles.name}>
              <div className={styles.fullName}>{user.name}</div>
              <div>{'user.status'}</div>
            </div>

            <div className={styles.location}>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
