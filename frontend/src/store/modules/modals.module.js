const modals = {
  namespaced: true,
  state: () => ({
    createGroupModal: false,
  }),
  getters: {},
  mutations: {
    setTrue(state) {
      state.createGroupModal = true;
    },

    setFalse(state) {
      state.createGroupModal = false;
    },
  },
  actions: {},
};

export default modals;
