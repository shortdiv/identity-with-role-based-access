import axios from "axios";
const netlifyIdentity = require("netlify-identity-widget");

export const state = {
  token: "",
  isIdentityModalOpen: false,
  isSpecial: false
};

export const mutations = {
  TOGGLE_IDENTITY_MODAL(state) {
    state.isIdentityModalOpen = !state.isIdentityModalOpen;
  },
  SUPER_SPECIAL_FUNCTION_INVOKED(state, val) {
    state.isSpecial = val;
  }
};

export const getters = {};

export const actions = {
  initializeIdentity({ commit }, val) {
    netlifyIdentity.init({
      container: val
    });
    netlifyIdentity.open(); // open the modal
    netlifyIdentity.open("signup"); // open the modal to the signup tab
    netlifyIdentity.on("close", function() {
      commit("TOGGLE_IDENTITY_MODAL");
    });
    netlifyIdentity.on("login", userData => {
      let config = {
        headers: {
          Authorization: `Bearer ${userData.token.access_token}`
        }
      };
      axios
        .get("/api/super-special-function", {
          config
        })
        .then(result => {
          console.log(result);
          commit("SUPER_SPECIAL_FUNCTION_INVOKED", true);
        });
    });
    netlifyIdentity.on("logout", () => {
      commit("SUPER_SPECIAL_FUNCTION_INVOKED", false);
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
