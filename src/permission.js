import router from './router';
import store from './store';
import { getToken } from './utils/cookie';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const { title } = to.meta;

  store.dispatch('toggleDevice');

  document.title = title;

  const token = getToken();

  const whiteList = ['/login', '/register', '/resetPwd'];

  if (!token) {
    whiteList.includes(to.path) ? next() : next(`/login?redirect=${to.path}`);
    return;
  }

  if (to.path === '/login') {
    Message({
      message: '请勿重复登录',
      type: 'warning',
      duration: 3000,
    });
    next({ path: '/' });
    return;
  }

  let { user } = store.getters;
  if (JSON.stringify(user) !== '{}') {
    next();
    return;
  }

  // 动态加载路由
  await store.dispatch('GetUserInfo');
  user = store.getters.user;
  const { role } = user;

  await store.dispatch('GeneratorRoutes', role);
  const { accessedRoutes } = store.getters;
  router.addRoutes(accessedRoutes);
  next({ ...to, replace: true });
});

router.afterEach(() => {
  NProgress.done();
});
