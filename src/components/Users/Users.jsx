import React, { Component } from 'react'
import styles from './users.module.css'
import './users.css'
import userAvatar from './../../assets/image/user-avatar.png'
import axios from 'axios'

export class Users extends Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          // debugger
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                className={
                  this.props.currentPage === page ? `${styles.selectedPage} ${styles.number}` : `${styles.number}`
                }
                // key={this.props.currentPage}
                onClick={(event) => {
                  this.onPageChanged(page)
                }}
              >
                {page}
              </div>
            )
          })}
        </div>
        {this.props.users.map((user) => (
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
                      this.props.unFollow(user.id)
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id)
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
}
