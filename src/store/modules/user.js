import { login, getUserInfo } from '@/api/user'
import { setToken } from '@/utils/cookie'

const user = {
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
  },
  actions: {
    async handleLogin({ commit }, form) {
      const res = await login(form)

      const user = {
          username: res.data.username,
          role: res.data.role.role_name,
        },
        { token } = res.data

      setToken(token)

      commit('SET_USER', user)
    },
    async GetUserInfo({ commit }) {
      const { data } = await getUserInfo()

      commit('SET_USER', data)
    },
  },
}

export default user
