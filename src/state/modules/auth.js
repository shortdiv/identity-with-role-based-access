import axios from "axios";
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
    netlifyIdentity.on("login", user => {
      let config = {
        headers: {
          Authorization: "Bearer " + user.token.access_token
        }
      };
      axios
        .get("/.netlify/functions/super-special-function", config)
        .then(result => {
          console.log("this is a user ", user);
          console.log("this is the result", result);
        });
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
