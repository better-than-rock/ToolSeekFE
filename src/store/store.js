import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
/* eslint no-param-reassign: "off" */
export default new Vuex.Store({
  state: {
    zip: '',
    loginToken: '',
  },
  mutations: {
    SET_ZIP: (state, zip) => { state.zip = zip; },
    SET_TOKEN: (state, token) => { state.loginToken = token; },
  },
  actions: {
    setZip: (context, zip) => context.commit('SET_ZIP', zip),
    login: (context, token) => context.commit('SET_TOKEN', token),
  },
  getters: {
    loginToken: state => state.loginToken,
  },
});
