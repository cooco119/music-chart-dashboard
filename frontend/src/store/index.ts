import Vue from 'vue';
import Vuex from 'vuex';
import RecentState from './recent';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    recent: {
      namespaced: true,
      ...RecentState,
    }
  }
});

export default store;
