const modals = {
  namespaced: true,
  state: () => ({
    createGroupModal: false,
    deleteGroupModal: false,
    eventModal: false,
    eName: "",
    eDescription: "",
    eID: "",
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

    setEvent(state, value) {
      state.eventModal = value;
    },

    setEventValues(state, payload) {
      state.eDescription = payload.description;
      state.eName = payload.name;
      state.eID = payload.id;
    },

    setName(state, text) {
      state.eName = text;
    },

    setDescription(state, text) {
      state.eDescription = text;
    },
  },
  actions: {},
};

export default modals;
