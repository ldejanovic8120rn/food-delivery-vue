<template>
    <div class="single">
        <Header v-if="currentRestaurant" :subtitle="currentRestaurant.name" />
        <Food v-if="currentRestaurant" />
        <Comments v-if="currentRestaurant" />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import { mapActions, mapState } from 'vuex';
    import Food from '@/components/Food.vue';
    import Comments from '../components/Comments.vue';

    export default {
        name: 'SingleRestaurantView',

        components: {
            Header,
            Food,
            Comments
        },

        computed: {
            ...mapState([
                'currentRestaurant'
            ])
        },

        mounted() {
            setTimeout(() => {
                this.fetchCommentsByRestaurant(this.$route.params.id);    
            }, 100)
            
            
        },


        methods: {
            ...mapActions([
                'fetchCommentsByRestaurant'
            ])
        },

    }
</script>

<style scoped>

</style>