<template>
    <div id="app">
        <Header subtitle="Create account" />

        <b-form @submit="onSubmit">
            <b-form-group label="First name:" label-for="firstName">
                <b-form-input id="firstName" v-model="form.first_name" placeholder="Enter first name" required>
                </b-form-input>
            </b-form-group>

            <b-form-group label="Last name:" label-for="lastName">
                <b-form-input id="lastName" v-model="form.last_name" placeholder="Enter last name" required>
                </b-form-input>
            </b-form-group>

            <b-form-group label="Username:" label-for="username">
                <b-form-input id="username" v-model="form.username" placeholder="Enter username" required>
                </b-form-input>
            </b-form-group>

            <b-form-group label="Email address:" label-for="email">
                <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required>
                </b-form-input>
            </b-form-group>

            <b-form-group label="Password:" label-for="password">
                <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
            </b-form-group>
            <br>
            <b-button type="submit" variant="info">Submit</b-button>
        </b-form>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
    name: 'Register',

    components: {
        Header
    },

    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: ''
            }
        }
    },

    methods: {
        ...mapActions([
            'register'
        ]),

        onSubmit(e) {
            e.preventDefault();

            this.register(this.form);
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style scoped>
</style>
