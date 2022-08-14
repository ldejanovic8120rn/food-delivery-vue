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

    setRestaurants(state, restaurants) {
      state.restaurants = restaurants;
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
      console.log("LOGIN");
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
            commit('setToken', tkn.token);
          }
        });
    },

    fetchRestaurants({ commit }) {
      console.log("DOHVATAMO RESTORANE");

      fetch('http://localhost:8081/admin/restaurants', {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFETUlOIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY2MDUwNTk5N30.fQ71UpVC3hUl3kuQsFscSs0D-Qw00CqsoPrfqshRiAo"
        }
      }).then(res => res.json())
        .then(restaurants => {
            console.log("RESTORANI: ")
            console.log(restaurants)
            commit('setRestaurants', restaurants);
        });
    },

  },
  modules: {
  }
})
