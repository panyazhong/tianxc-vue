import { login, getUserInfo } from '@/api/user';
import { setToken, removeToken } from '@/utils/cookie';

const user = {
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    async handleLogin({ commit }, form) {
      const res = await login(form);

      const { token } = res.data;

      setToken(token);
    },
    async GetUserInfo({ commit }) {
      const { data } = await getUserInfo();

      const user = {
        username: data.username,
        role: data.role.role_name,
      };

      commit('SET_USER', user);
    },
  },
};

export default user;
