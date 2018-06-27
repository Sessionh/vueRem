import Vue from 'vue'
import util from '../router/util';
import Router from 'vue-router'
import routers from './model/router';
Vue.use(Router);

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: routers
};
const router = new Router(RouterConfig);
export default router;

router.beforeEach((to, form, next) => {
  console.log(to.name);
  let user = localStorage.getItem('userName');
  if (to.name === 'login' && user !== null) {
    console.log('home');
      next({
        name: 'home'
      });
  } else if (to.name !== 'login' && user === null) {
    console.log('login');
      next({
        name: 'login'
      });
  } else if (to.name === null){
    console.log(2222);
      next({
        name: 'error404',
      });
  } else {
    next();
  }

});


