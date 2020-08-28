import router from './router';
import store from './store';
import { getCookie } from './utils/cookie';

router.beforeEach(async (from, to, next) => {
  if (!getCookie()) {
    await store.dispatch('GeneratorRoutes', 'user');

    const accessedRoutes = store.getters.accessedRoutes;

    console.log(accessedRoutes);
    router.addRoutes(accessedRoutes);

    console.log(router);
    next({ ...to, replace: true });
  }
});
