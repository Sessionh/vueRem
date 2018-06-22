// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(Iview);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  // render: h => h(App),
  components: { App },
  template: '<App/>'
})
