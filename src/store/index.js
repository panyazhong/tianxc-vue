import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getter';

import permission from './modules/permission';
import user from './modules/user';
import app from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    permission,
    user,
    app,
  },
});
