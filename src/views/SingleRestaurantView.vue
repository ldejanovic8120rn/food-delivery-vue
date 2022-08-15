<template>
    <div class="single">
        <Header :subtitle="subtitle" />
        <Food v-for="food in restaurant.foods" :key="food.id" :food="food" />
        <!-- <Comments /> -->
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import { mapActions } from 'vuex';
    import Food from '@/components/Food.vue';
    // import Comments from '../components/Comments.vue';

    export default {
        name: 'SingleRestaurantView',

        components: {
            Header,
            Food
        },

        data() {
            return {
                restaurant: null,
                subtitle: ''
            }
        },

        mounted() {
            this.getRestaurantById(this.$route.params.id)
                .then(r => {
                    this.restaurant = r;
                    this.subtitle = this.restaurant.name;
                })
                .catch(err => alert(err));
        },


        methods: {
            ...mapActions([
                'getRestaurantById'
            ])
        },

    }
</script>

<style scoped>

</style>