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
      const { dataset } = res.data;
      commit('updateMelon', { dataset });
    },
    fetchBugs: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/bugs`);
      const { dataset } = res.data;
      commit('updateBugs', { dataset });
    },
    fetchNaver: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/naver`);
      const { dataset } = res.data;
      commit('updateNaver', { dataset });
    },
    fetchGenie: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/genie`);
      const { dataset } = res.data;
      commit('updateGenie', { dataset });
    },
    fetchAll: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/all`);
      const { dataset } = res.data;
      commit('updateAll', { dataset });
    },
    fetchRecentMelon: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/melon/recent`);
      const { dataset } = res.data;
      commit('updateRecentMelon', { dataset });
    },
    fetchRecentBugs: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/bugs/recent`);
      const { dataset } = res.data;
      commit('updateRecentBugs', { dataset });
    },
    fetchRecentNaver: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/naver/recent`);
      const { dataset } = res.data;
      commit('updateRecentNaver', { dataset });
    },
    fetchRecentGenie: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/genie/recent`);
      const { dataset } = res.data;
      commit('updateRecentGenie', { dataset });
    },
    fetchRecentAll: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/all/recent`);
      const { dataset } = res.data;
      commit('updateRecentAll', { dataset });
    },
  },
  modules: {
  }
})
