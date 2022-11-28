import { getProfile } from "@/helpers/localStorage";
import { login, register } from "@/services/auth/auth";
import { mutation } from "../constants/mutations";
import { setProfile } from "./../../helpers/localStorage";

const auth = {
  namespaced: true,
  state: () => ({
    profile: getProfile() || {},
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

      setProfile(response.data);
      commit(mutation.SET_PROFILE, response.data);
    },
  },
};

export default auth;
