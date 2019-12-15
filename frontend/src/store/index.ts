import Vue from 'vue';
import Vuex from 'vuex';
import recent from './recent';
import diff from './diff';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    recent: {
      namespaced: true,
      ...recent,
    },
    diff: {
      namespaced: true,
      ...diff,
    },
  }
});

export default store;
