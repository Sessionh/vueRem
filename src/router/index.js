import Vue from 'vue';
import VueRouter from 'vue-router';
import {addUrl} from '@/lib/util'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
   
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      showHeader: true,
      showFoot: false,
      title: '首页'
    },
    component: addUrl('Home')
  },
  {
    path: '/vip',
    name: 'vip',
    meta: {
      showHeader: true,
      title: 'vip'
    },
    component: addUrl('Vip')
  },
  {
    path: '/joinPartar',
    name: 'joinPartar',
    meta: {
      showHeader: true,
      title: '加盟合作'
    },
    component: addUrl('JoinPartar')
  },
  {
    path: '/shopDetails',
    name: 'shopDetails',
    meta: {
      showHeader: true,
      title: '商品详情'
    },
    component: addUrl('ShopDetails')
  },
  {
    path: '/ganeralize',
    name: 'ganeralize',
    meta: {
      showHeader: true,
      title: '推广'
    },
    component: addUrl('Ganeralize')
  },
  {
    path: '/shareCode',
    name: 'shareCode',
    meta: {
      showHeader: true,
      title: '分享码',
      hdColor: '#ffd917',
      borderHide: true
     
    },
    component: addUrl('ShareCode')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      showHeader: true,
      title: '测试'
    },
    component:  addUrl('About')
  },
  {
    path: '/hotRedPacket',
    name: 'hotRedPacket',
    meta: {
      showHeader: true,
      title: '刺激红包'
    },
    component:  addUrl('HotRedPacket')
  },
  {
    path: '/taskRedPacket',
    name: 'taskRedPacket',
    meta: {
      showHeader: true,
      title: '刺激红包'
    },
    component:  addUrl('TaskRedPacket')
  },
  {
    path: '/inviteFriends',
    name: 'inviteFriends',
    meta: {
      showHeader: true,
      title: '邀请有奖'
    },
    component:  addUrl('InviteFriends')
  },

  

  

  
]

const router = new VueRouter({
  routes
})

export default router
