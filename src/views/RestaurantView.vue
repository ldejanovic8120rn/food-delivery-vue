<template>
    <div class="restaurants">
        <Header subtitle="Restaurants" />
        <Restaurant v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
        <div class="restoran">

        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import { mapActions, mapState, mapMutations } from 'vuex';
    import Restaurant from '../components/Restaurant.vue';

    export default {
        name: 'RestaurantView',

        components: {
            Header,
            Restaurant
        }, 

        computed: {
            ...mapState([
                'restaurants'
            ])
        },

    }
</script>

<style scoped>

</style>