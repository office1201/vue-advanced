import Vue from "vue";
import Vuex from "vuex";
import state from "./state.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // #1 state: state 형식의 축약 문법
  state,
  getters,
  mutations,
  actions,
});
