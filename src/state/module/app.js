import Vue from 'vue';
const app = {
  state: {
    tagList: ['首页','标签1','标签2','标签3','标签4','标签5','标签6','标签7','标签8','标签9','标签10','标签11','标签12','标签13'],
    cachePage: [],
    tagColor: '首页'
  },
  mutations: {
    setTagList (state, list) {
      // state.cachePage.push(...list);
      state.tagList = list;
    },
    // 关闭全部标签
    closeAllTagList(state) {
      state.tagList=  ['首页'];
      state.tagColor = '首页';
    },
    // 关闭其他标签
    closeCurrentTag(state) {
      let result = ['首页'];
      let tag = state.tagColor;
      console.log(tag);
      if (tag !== '首页') {
        state.tagList.forEach(res => {
          if (res === tag ) {
            result.push(tag);
          }
        });
        state.tagList = result;
      } else {
        state.tagList = ['首页'];
      }
    },
    // 设置切换tag 高亮
    setTagColor (state, name) {
      state.tagColor = name;
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
