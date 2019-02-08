export const state = {
  user: null
};
export const mutations = {
  SET_USER(state, val) {
    state.user = val;
  }
};
export const getters = {};
export const actions = {
  getUserData() {
    console.log("hi im elfo");
  }
};
