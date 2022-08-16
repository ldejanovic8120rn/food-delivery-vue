<template>
    <div>
        <Header subtitle="Cart" />
        <Cart v-if="cartItems.length !== 0" />
        <div v-else>
            <h2 class="m-5">Cart is empty!!!</h2>
            <b-icon icon="emoji-angry" scale="4" variant="danger"></b-icon>
        </div>

    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import { mapMutations, mapState } from 'vuex';
    import Cart from '@/components/Cart.vue';

    export default {
        name: 'CartView',

        components: {
            Header,
            Cart,
        },

        computed: {
            ...mapState([
                'cartItems'
            ])
        },


        methods: {
            ...mapMutations([
                'removeCartItem',
            ]),
        },

    }
</script>

<style scoped>
</style>