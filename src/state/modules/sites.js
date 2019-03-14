import axios from "axios";

export const state = {
  isSiteLocked: false
};

export const mutations = {
  LOCK_SITE(state) {
    state.isSiteLocked = true;
  }
};

export const getters = {};

export const actions = {
  lockSite({ commit }) {
    //set some redirect rule//
    axios({
      url: `https://xenodochial-curran-e46c63.netlify.com/.netlify/functions/lock-site`,
      headers: { Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}` },
      method: "PUT",
      data: {
        command: "lock site please"
      }
    }).then(res => {
      console.log(res);
    });
    commit("LOCK_SITE");
  }
};
