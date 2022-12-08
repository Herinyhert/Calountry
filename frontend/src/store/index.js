import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.module";
import modals from "./modules/modals.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth, modals },
});
