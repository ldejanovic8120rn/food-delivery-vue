<template>
    <div class="single">
        <Header :subtitle="subtitle" />
        <Food v-for="food in restaurant.foods" :key="food.id" :food="food" />
        <Comments :restaurant="restaurant"/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import { mapActions } from 'vuex';
    import Food from '@/components/Food.vue';
    import Comments from '../components/Comments.vue';

    export default {
        name: 'SingleRestaurantView',

        components: {
            Header,
            Food,
            Comments
        },

        data() {
            return {
                restaurant: null,
                subtitle: ''
            }
        },

        mounted() {
            setTimeout(() => {
                this.getRestaurantById(this.$route.params.id)
                    .then(r => {
                        this.restaurant = r;
                        this.subtitle = this.restaurant.name;
                    })
                    .catch(err => alert(err));
            }, 100)
            
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