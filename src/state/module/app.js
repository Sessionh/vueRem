import Vue from 'vue';
const app = {
  state: {
    cachePage: [],
    currentPageName: ''
  },
  mutations: {
    setTagsList (state, list) {
      state.cachePage.push(...list);
    },
    // 设置切换tag 高亮
    setCurrentPageName (state, name) {
      state.currentPageName = name;
    },
    // 动态添加主界面路由，需要缓存
    updateAppRouter (state, routes) {
      state.routers.push(...routes);
      router.addRoutes(routes);
    },
    // 动态添加全局路由，不需要缓存
    updateDefaultRouter (state, routes) {
      router.addRoutes(routes);
    },
    // 接受前台数组，刷新菜单
    updateMenulist (state, routes) {
      state.menuList = routes;
    }
  }
};

export default app;
