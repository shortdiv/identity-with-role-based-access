import axios from "axios";

export const state = {
  user: null
};
export const mutations = {
  SET_USER(state, val) {
    console.log(state);
    state.user = val;
  }
};
export const getters = {};
export const actions = {
  getUserData() {
    axios({
      url: `/.identity/admin/users/${state.user.id}`,
      headers: { Authorization: `Bearer ${state.user.token.access_token}` },
      method: "GET"
    }).then(res => {
      console.log(res);
    });
    console.log("hi im elfo");
  }
};
