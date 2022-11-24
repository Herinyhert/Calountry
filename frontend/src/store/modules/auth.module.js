import { login, register } from "@/services/auth/auth";
import { mutation } from "../constants/mutations";

const auth = {
  namespaced: true,
  state: () => ({
    profile: {
      token: "",
    },
  }),
  getters: {},
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const response = await register(payload);
      commit(mutation.REGISTER, response);
    },
    async login({ commit }, payload) {
      const response = await login(payload);
      if (!response.data) throw "Athentication failed";
      commit(mutation.SET_PROFILE, response.data);
    },
  },
};

export default auth;
