import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  header: {
    'API-KEY': '4438de1e-db1f-4295-ad92-efa0743a311e',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data
    })
  },

  getFollow(currentPage = 1, pageSize = 10) {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data
    })
  },
}
