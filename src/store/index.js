import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    restaurants: [],
    chartItems: [],
    currentRestaurant: null,
    comments: []
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

    setComments(state, comments) {
      state.comments = comments;
    },

    setCommentsToRestaurant(state, obj) {
      const restaurant = state.restaurants.filter(r => r.id == obj.id)[0];
      restaurant['comments'] = obj.comments;
    },

    setCurrentRestaurant(state, restaurant) {
      state.currentRestaurant = restaurant;
    },

    addComment(state, obj) {
      //automatski se doda i u comments
      const restaurant = state.restaurants.filter(r => r.id == obj.restaurant_id)[0];
      restaurant['comments'].push(obj.comment);

      // if (state.currentRestaurant !== null && state.currentRestaurant.id == restaurant.id) {
      //   state.comments.push(obj.comment);
      // }
      
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

    fetchCommentsByRestaurant({ commit, state }, id) {
      const restaurant = state.restaurants.filter(r => r.id == id)[0];

      if (restaurant && restaurant['comments']) {
        commit('setCurrentRestaurant', restaurant);
        commit('setComments', restaurant.comments);
      }
      else if(restaurant) {
        fetch(`http://localhost:8081/admin/comments/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(comments => {
            commit('setCommentsToRestaurant', {id: id, comments: comments});
            commit('setCurrentRestaurant', restaurant);
            commit('setComments', restaurant.comments);
          });
      }
      else {
        commit('setCurrentRestaurant', null);
      }
    },

    socket_comment({ commit }, cmt) {
      const comment = JSON.parse(cmt);
      commit('addComment', { restaurant_id: comment.restaurant_id, comment: comment });
    }
  },

  modules: {
  }
})
