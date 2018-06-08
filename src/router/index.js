import Vue from 'vue'
import Router from 'vue-router'
import menu from '../iview/menu/menu'
import HelloWorld from '../components/HelloWorld'
import main from '../iview/menu/main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
})
