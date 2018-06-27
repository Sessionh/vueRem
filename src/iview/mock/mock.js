const Mock = require('mockjs');
const menu = [
  {
    path: '/host1',
    icon: 'gear-b',
    name: 'host',
    title: '主页',
    children: [
      {
        path: '/hostOne',
        icon: 'person-add',
        name: 'hostOne',
        title: '主页1',
        component: 'table/hostOne',
      },
      {
        path: '/hostTwo',
        icon: 'person-add',
        name: 'hostTwo',
        title: '主页2',
        component: 'host/hostTwo',
      },
      {
        path: '/hostControl',
        icon: 'nuclear',
        name: 'hostControl',
        title: '控制台',
        component: 'host/hostControl'
      }
    ]
  },
  {
    path: '/user',
    icon: 'gear-b',
    name: 'user1',
    title: '系统管理',
    children: [
      {
        path: '/userName',
        icon: 'person-add',
        name: 'userName',
        title: '用户管理',
        component: 'user/user',
      },
      {
        path: '/appRoles',
        icon: 'person',
        name: 'appRoles',
        title: '角色管理',
        component: 'user/appRoles',
      },
      {
        path: '/mySetting',
        icon: 'battery-full',
        name: 'mySetting',
        title: '我的设置',
        component: 'jax/app/app',
        children: [
          {
            path: '/title1',
            icon: 'person-add',
            name: 'title1',
            title: '基本资料',
            component: 'user/userData'
          },
          {
            path: '/title2',
            icon: 'battery-full',
            name: 'title2',
            title: '权限管理',
            component: 'user/authority'
          }
        ]
      },
    ]
  }
];
Mock.mock('menu', 'post', menu);
