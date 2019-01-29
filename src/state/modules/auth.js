const netlifyIdentity = require("netlify-identity-widget");

export const state = {
  token: "",
  isIdentityModalOpen: false
};

export const mutations = {
  TOGGLE_IDENTITY_MODAL(state) {
    state.isIdentityModalOpen = !state.isIdentityModalOpen;
  }
};

export const getters = {};

export const actions = {
  initializeIdentity({ commit }, val) {
    debugger;
    netlifyIdentity.init({
      container: val
    });
    netlifyIdentity.open(); // open the modal
    netlifyIdentity.open("signup"); // open the modal to the signup tab
    netlifyIdentity.on("close", function() {
      commit("TOGGLE_IDENTITY_MODAL");
    });
    commit("TOGGLE_IDENTITY_MODAL");
  },
  toggleIdentityModal({ commit }) {
    commit("TOGGLE_IDENTITY_MODAL");
  },
  openIdentityModal({ dispatch }) {
    netlifyIdentity.open("login");
    dispatch("toggleIdentityModal");
  }
};
