import req from './requreCom';
import axios from 'axios';
import main from '../components/main';
import error404 from '../components/error/404';

let util = {

};
util.isMenuListRouter = function (name) {

};

util.setMenuList = function (menuList) {
  console.log(menuList);
  let menu = ['home'];
  menuList.forEach(res => {
    if (res.children !== undefined && res.children !== null) {
      if(res.children.length > 0) {
        res.children.forEach((val) => {
          if (val.children !== undefined && val.children !== null) {
            if (val.children.length > 0) {
              val.children.forEach(data => {
                menu.push(data.name);
              });
            } else {
              menu.push(val.name);
            }
          } else {
            menu.push(val.name);
          }
        })
      }
    }

  });

  return menu;

};
// 获取 用户头像 路径
util.getImgUrl = 'log1.jpeg';

util.getRouterChildren = function (vm) {
  let str = [];
  let menu = [{
    path: '/home',
    name: 'home',
    component: main,
    children: []
  }];
  let error = [{
    path: '/error404',
    name: 'error404',
    component: req('error/404')
  }];
  axios.post('menu').then(res => {
    console.log(res.data);
    let menuList = res.data;
    localStorage.setItem('menu', JSON.stringify(res.data));
    vm.$store.commit('setMenu',  res.data);
    menuList.forEach(res => {
      if (res.children !== undefined && res.children !== null) {
        if(res.children.length > 0) {
          res.children.forEach((val) => {
            if (val.children !== undefined && val.children !== null) {
              if (val.children.length > 0) {
                val.children.forEach(data => {
                  menu[0].children.push({name: data.name, path: data.path, component: req(data.component), title: data.title});
                });
              } else {
                menu[0].children.push({name: val.name, path: val.path,component: req(val.component), title: val.title});
              }
            } else {
              menu[0].children.push({name: val.name, path: val.path,component: req(val.component), title: val.title});
            }

          })
        }
      }
    });
    menu[0].children.push({name: 'homes', path: 'homes', component: req('home/homes')}); // 添加首页
    vm.$store.commit('updateDefaultRouter', menu); // 动态加入菜单
    vm.$store.commit('updateRouter', error); // 动态加入404页面
  });
};

util.initRouterNode = function (routers, data) {
  for (let item of data) {
    let menu = Object.assign({}, item);
    // menu.component = lazyLoading(menu.component);
    if (item.children && item.children.length > 0) {
      menu.children = [];
      util.initRouterNode(menu.children, item.children);
    }
    // 给页面添加标题
    menu.meta = { title: menu.title };
    routers.push(menu);
  }
};
// 日期转换
util.formatDate = function (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4-RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  // 遍历这个对象
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)){
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str:padLeftZero(str));
    }
  }
  return fmt;
};
export default util;
