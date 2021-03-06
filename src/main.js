import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import './permission';

import * as filters from '@/filters';

Vue.config.productionTip = false;
Vue.use(Element);

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
