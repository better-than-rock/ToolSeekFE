import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
/* eslint no-param-reassign: "off" */
export default new Vuex.Store({
  state: {
    zip: '',
  },
  mutations: {
    SET_ZIP: (state, zip) => { state.zip = zip; },
  },
  actions: {
    setZip: (context, zip) => context.commit('SET_ZIP', zip),
  },
});
