const WIDTH = 1024;
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
      if (rect.width - 1 < WIDTH) {
        commit('SET_DEVICE', 'mobile');
      } else {
        commit('SET_DEVICE', 'pc');
      }
    },
  },
};

export default app;
