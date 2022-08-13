import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    restaurants: [],
    chartItems: []
  },
  getters: {
  },
  mutations: {

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

  },
  actions: {

    register({ commit }, obj) {
      fetch('http://127.0.0.1:8082/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then(res => res.json())
        .then(tkn => commit('setToken', tkn.token));
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:8082/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then(res => res.json())
        .then(tkn => {
          if (tkn.msg) {
            alert(tkn.msg);
          } 
          else {
            commit('setToken', tkn.token)
          }
        });
    },

  },
  modules: {
  }
})
