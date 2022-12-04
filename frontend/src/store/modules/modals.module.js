const modals = {
  namespaced: true,
  state: () => ({
    createGroupModal: false,
    deleteGroupModal: false,
  }),
  getters: {},
  mutations: {
    setTrue(state) {
      state.createGroupModal = true;
    },

    setFalse(state) {
      state.createGroupModal = false;
    },

    setTrueDelete(state) {
      state.deleteGroupModal = true;
    },
    setFalseDelete(state) {
      state.deleteGroupModal = false;
    },
  },
  actions: {},
};

export default modals;
