import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { CONFIG } from '../config';
import { RootState } from '../types';

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
    melon: [],
    bugs: [],
    naver: [],
    genie: [],
    all: [],
    melonRecent: [],
    bugsRecent: [],
    naverRecent: [],
    genieRecent: [],
    allRecent: [],
  },
  mutations: {
    updateMelon: (state, payload) => {
      state.melon = payload.dataset;
    },
    updateBugs: (state, payload) => {
      state.bugs = payload.dataset;
    },
    updateNaver: (state, payload) => {
      state.naver = payload.dataset;
    },
    updateGenie: (state, payload) => {
      state.genie = payload.dataset;
    },
    updateAll: (state, payload) => {
      state.all = payload.dataset;
    },
    updateRecentMelon: (state, payload) => {
      state.melonRecent = payload.dataset;
    },
    updateRecentBugs: (state, payload) => {
      state.bugsRecent = payload.dataset;
    },
    updateRecentNaver: (state, payload) => {
      state.naverRecent = payload.dataset;
    },
    updateRecentGenie: (state, payload) => {
      state.genieRecent = payload.dataset;
    },
    updateRecentAll: (state, payload) => {
      state.allRecent = payload.dataset;
    },
  },
  actions: {
    fetchMelon: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/melon`);
      commit('updateMelon', { dataset: res.data });
    },
    fetchBugs: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/bugs`);
      commit('updateBugs', { dataset: res.data });
    },
    fetchNaver: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/naver`);
      commit('updateNaver', { dataset: res.data });
    },
    fetchGenie: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/genie`);
      commit('updateGenie', { dataset: res.data });
    },
    fetchAll: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/all`);
      commit('updateAll', { dataset: res.data });
    },
    fetchRecentMelon: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/melon/recent`);
      commit('updateRecentMelon', { dataset: res.data });
    },
    fetchRecentBugs: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/bugs/recent`);
      commit('updateRecentBugs', { dataset: res.data });
    },
    fetchRecentNaver: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/naver/recent`);
      commit('updateRecentNaver', { dataset: res.data });
    },
    fetchRecentGenie: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/genie/recent`);
      commit('updateRecentGenie', { dataset: res.data });
    },
    fetchRecentAll: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/all/recent`);
      commit('updateRecentAll', { dataset: res.data });
    },
  },
  modules: {
  }
})
