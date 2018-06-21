import Vue from 'vue';
import Vuex from 'vuex';

import app from './module/app';
import user from './module/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {

  },
  modules: {
    app,
    user
  }
});

export default store;
