import styles from './users.module.css'
import './users.css'
import userAvatar from '../../assets/image/user-avatar.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages = [...pages, i]
    // pages.push(i)
  }
  return (
    <div className={styles.section}>
      <h3 className={`${styles['section-title']} ${'title'}`}>Users</h3>

      <div className={styles.pagination}>
        {pages.map((page) => {
          return (
            <div
              className={props.currentPage === page ? `${styles.selectedPage} ${styles.number}` : `${styles.number}`}
              onClick={(event) => {
                props.onPageChanged(page)
              }}
            >
              {page}
            </div>
          )
        })}
      </div>
      {props.users.map((user) => (
        <div className={styles.users} key={user.id}>
          <span>
            <div className={styles.photo}>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={styles.img}
                  src={user.photos.small != null ? user.photos.small : userAvatar}
                  alt="img"
                  style={{ widht: '35px' }}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id)
                        }
                      })
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        { withCredentials: true }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id)
                        }
                      })
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
