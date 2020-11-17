const WIDTH = 1024;
const MOBILE_WIDTH = 768;
const app = {
  state: {
    device: 'pc',
  },
  mutations: {
    SET_DEVICE: (state, device) => {
      state.device = device;
    },
  },
  actions: {
    toggleDevice({ commit }) {
      const { body } = document,
        rect = body.getBoundingClientRect();
      if (rect.width - 1 < WIDTH && rect.width - 1 > MOBILE_WIDTH) {
        commit('SET_DEVICE', 'pad');
      } else if (rect.width - 1 < MOBILE_WIDTH) {
        commit('SET_DEVICE', 'mobile');
      } else {
        commit('SET_DEVICE', 'pc');
      }
    },
  },
};

export default app;
