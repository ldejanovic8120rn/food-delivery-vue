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

    setCommentsToRestaurant(state, obj) {
      const restaurant = state.restaurants.filter(r => r.id == obj.id)[0];
      restaurant['comments'] = obj.comments;
    },

    addComment(state, obj) {
      const restaurant = state.restaurants.filter(r => r.id == obj.restaurant_id)[0];
      restaurant['comments'].push(obj.comment);
    }

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
      fetch('http://localhost:8081/admin/restaurants', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
        .then(restaurants => {
            commit('setRestaurants', restaurants);
        });
    },

    getRestaurantById({ commit, state }, id) {
      return new Promise( (resolve, reject) => {
        const restaurant = state.restaurants.filter(r => r.id == id)[0];

        if (restaurant && restaurant['comments']) {
          resolve(restaurant);
        }
        else if(restaurant){
          fetch(`http://localhost:8081/admin/comments/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }).then(res => res.json())
            .then(comments => {
              commit('setCommentsToRestaurant', {id: id, comments: comments});
              resolve(restaurant);
            });
        }
        else {
          reject(Error("Wrong restaurant id"));
        }
      })
    },

    socket_comment({ commit }, cmt) {
      const comment = JSON.parse(cmt);
      commit('addComment', { restaurant_id: comment.restaurant_id, comment: comment });
    }
  },
  modules: {
  }
})
