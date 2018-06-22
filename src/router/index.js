import Vue from 'vue'
import main from '../iview/menu/main';
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld';
import login from '../login';

Vue.use(Router);
const routers = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  { path: '/home',
    name: 'home',
    component: main,
    children: [{
      path: 'emails',
      name: 'emails',
      component: HelloWorld
    }]
  },
  // {
  //   path: '/home',
  //   name: 'main',
  //   component: main
  // }
];
// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: routers
};
const router = new Router(RouterConfig);
export default router;
// router.beforeEach((to, form, next) => {
//   console.log(to);
//   next(false);
//
// });


