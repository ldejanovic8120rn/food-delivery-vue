<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KBzam0Z3DrFxVJ19kC-kRB3OA039fdr9zg&usqp=CAU"
            alt="Kitten" width="40px" height="40px">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/restaurants">Restaurants</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/chart">
              <b-icon icon="cart3"></b-icon>
            </b-nav-item>

          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view class="stranica" />
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',

    computed: {
      ...mapState([
        'token'
      ])
    },

    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },

    methods: {
      ...mapMutations([
        'removeToken',
        'setToken'
      ]),


      logout() {
        this.removeToken();
      }
    },

    sockets: {
      error(err) {
        alert(err);
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }

  .stranica {
    width: 80%;
    margin-left: 10%;
  }
</style>
