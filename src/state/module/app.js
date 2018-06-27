import Vue from 'vue';
import util from '../../router/util';
import router from '@/router/index';
const app = {
  state: {
    tagList: [{name:'首页', path: 'homes'}], //Tag 标签
    cachePage: [],
    tagColor: '首页',
    menuList: [], // 菜单
    keepMenuList: ['appRoles'], // 缓存路由
  },
  mutations: {
    // 添加菜单
    setMenu (state, list) {
      state.menuList = list;
    },
    setTagList (state, list) {
      // state.cachePage.push(...list);
     let menus =  util.setMenuList(list);
      state.tagList = menus;
    },
    setTag (state, data) {
      let count = 0;
      state.tagList.forEach(res => {
        if (res.name === data.name) {
          count++;
        }
      });
      if (count === 0) {
        state.tagList.push(data);
      }
      state.tagColor = data.name;

    },
    // 关闭单个标签
    closeTag (state, list) {
      state.tagList = list;
    },
    // 关闭全部标签
    closeAllTagList(state, vm) {
      state.tagList=  [{name:'首页', path: 'homes'}];
      state.tagColor = '首页';
      vm.$router.push({ // 切换到首页 路由
        name: 'homes'
      })
    },
    // 关闭其他标签
    closeCurrentTag(state) {
      let result = [{name:'首页', path: 'homes'}];
      let tag = state.tagColor;
      if (tag !== '首页') {
        state.tagList.forEach(res => {
          if (res.name === tag ) {
            result.push(res);
          }
        });
        state.tagList = result;
      } else {
        state.tagList = [{name:'首页', path: 'homes'}];
      }
    },
    // 设置切换tag 高亮
    setTagColor (state, name) {
      state.tagColor = name;
    },
    // 动态添加全局路由
    updateDefaultRouter (state, routes) {
      router.addRoutes(routes);
    },
  }
};

export default app;
