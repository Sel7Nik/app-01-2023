const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'NikName',
      photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/776758a3-ee50-4880-99a2-b8079263fce3/1920x',
      status: 'I am a boos',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      fullName: 'PickName',
      photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/776758a3-ee50-4880-99a2-b8079263fce3/1920x',
      followed: true,
      status: 'I am not a boos',
      location: { city: 'Kiev', country: 'Ukraina' },
    },
    {
      id: 3,
      followed: false,
      fullName: 'NikNorton',
      photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/776758a3-ee50-4880-99a2-b8079263fce3/1920x',
      status: 'I am a very big boos',
      location: { city: 'Metro', country: 'Bagams' },
    },
  ],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] }

    default:
      return state
  }
}

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
})
export const unFollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
})
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
})
