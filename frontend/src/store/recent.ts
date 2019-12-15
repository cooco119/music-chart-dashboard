import axios from 'axios';
import { CONFIG } from '../config';

const recentStore = {
  state: {
    melon: [],
    bugs: [],
    naver: [],
    genie: [],
    all: [],
  },
  getters: {
    melon(state) {
      return state.melon;
    },
    bugs(state) {
      return state.bugs;
    },
    naver(state) {
      return state.naver;
    },
    genie(state) {
      return state.genie;
    },
    all(state) {
      return state.all;
    }
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
  },
  actions: {
    fetchMelon: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/melon/recent`);
      commit('updateMelon', { dataset: res.data });
    },
    fetchBugs: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/bugs/recent`);
      commit('updateBugs', { dataset: res.data });
    },
    fetchNaver: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/naver/recent`);
      commit('updatetNaver', { dataset: res.data });
    },
    fetchGenie: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/genie/recent`);
      commit('updateGenie', { dataset: res.data });
    },
    fetchAll: async ({ commit }) => {
      const res = await axios.get(`${CONFIG.BACKEND_URL}/api/v1/data/all/recent`);
      commit('updateAll', { dataset: res.data });
    },
  }
};

export default recentStore;
