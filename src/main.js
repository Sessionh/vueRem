import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/common.scss';
import './assets/reset.css';
import './lib/vant';


Vue.config.productionTip = false


// rem h5 适配
import 'amfe-flexible/index.js'


const FastClick = require('fastclick') //解决点击延迟
const str = navigator.userAgent.toLowerCase()
const ver = str.match(/cpu iphone os (.*?) like mac os/)
if (!ver) { //非IOS系统
    // 引入fastclick 做相关处理
    FastClick.attach(document.body);
} else {
    if (parseInt(ver[1].split('_')[0]) < 11) {
        // 引入fastclick 做相关处理
        FastClick.attach(document.body);
    }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
