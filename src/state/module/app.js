import Vue from 'vue';
import util from '../../router/util';
import router from '@/router/index';
const app = {
  state: {
    tagList: [{name:'首页', path: 'homes'}], //Tag 标签
    cachePage: [],
    tagColor: '首页',
    menuList: [], // 菜单
    keepMenuList: [], // 缓存路由
    menuRouter: [], // 保存 router 信息
    menuPath: {name: '', nameSub: ''}, // 主页面 菜单路径显示
  },
  mutations: {
    // 添加菜单
    setMenu (state, list) {
      state.menuList = list;
    },
    // 设置 主页面显示 菜单路径
    setMenuPath(state, name) {
      if (name === 'homes') { // 判断 是否跳转首页
        state.menuPath = {name: '', nameSub: ''};
      }  else {
        state.menuList.forEach(res => {
          if (res.children !== null && res.children !== undefined) {
            res.children.forEach(resSub => {
              if (resSub.name === name) {
                state.menuPath.name = res.title;
                state.menuPath.nameSub = resSub.title;
              } else {
                if (resSub.children !== null && resSub.children !== undefined && resSub.children !== null) {
                  if (resSub.children.length > 0) {
                    resSub.children.forEach(resSubmenu => { // 3级菜单 循环
                      if (resSubmenu.name === name) {
                        state.menuPath.name = res.title  ;
                        state.menuPath.nameSub = resSubmenu.title;
                      }
                    });

                  }
                }
              }

            })
          }
        })
      }

    },
    initMenuPath (state) {
      state.menuPath = {name: '', nameSub: ''};
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
      state.menuRouter = routes;
    },
    // 动态添加路由 不保存
    updateRouter (state,routes) {
      router.addRoutes(routes);
    },
  }
};

export default app;
