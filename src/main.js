// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import util from './router/util'
import  'mockjs';
import './iview/mock/index';
axios.defaults.timeout = 30000;
// axios.defaults.baseURL = '/JaxOps/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Vue.use(Iview);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  // components: { App },
  // template: '<App/>',
  mounted () {
     let user = localStorage.getItem('userName');
     console.log(user)
     if (user !== undefined && user !== null & user !== '') {
      let menu = JSON.parse(localStorage.getItem('menu'));
      this.$store.commit('setMenu', menu);
      util.getRouterChildren(this);
    }

  },
  created() {


  }
})
