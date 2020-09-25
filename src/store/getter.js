const getters = {
  accessedRoutes: (state) => state.permission.accessedRoutes,
  user: (state) => state.user.user,

  device: (state) => state.app.device,
};

export default getters;
