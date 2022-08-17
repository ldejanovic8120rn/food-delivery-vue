<template>
    <div class="cart-component">
        <div v-for="food in cartItems" :key="food.id" class="m-4">
            <b-container class="border border-info rounded cart">
                <b-row class="justify-content-md-center m-4">
                    <b-col class="m-4">
                        <b-row class="p-1">
                            <h4><b>{{ food.name }}</b></h4>
                        </b-row>
                        <b-row class="p-1">
                            <h5><b>Category:</b> {{ food.category }}</h5>
                        </b-row>
                        <b-row class="p-1">
                            <h5><b>Portion:</b> {{ food.portion }}</h5>
                        </b-row>
                        <b-row class="p-1">
                            <h5><b>Description:</b> {{ food.description }}</h5>
                        </b-row>
                        <b-row class="p-1">
                            <h5><b>Count:</b> {{ food.count }}</h5>
                        </b-row>
                        <b-row class="p-1">
                            <h5><b>Price:</b> {{ food.price * food.count }} rsd</h5>
                        </b-row>
                        <b-row class="p-1">
                            <b-button @click="remove(food)" variant="white">
                                <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
                            </b-button>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <h4><b>Total: {{ total }} rsd</b></h4>
    </div>

</template>

<script>
    import { mapMutations, mapState } from 'vuex';

    export default {
        name: 'Cart',
        
        data() {
            return {
                total: 0
            }
        },

        computed: {
            ...mapState([
                'cartItems'
            ])
        },

        mounted() {
            this.total = 0;

            this.cartItems.forEach(element => {
                this.total += (element.price * element.count)
            });
        },

        methods: {
            ...mapMutations([
                'removeCartItem',
            ]),

            remove(cart) {
                this.total -= (cart.price * cart.count);
                this.removeCartItem(cart.id);
            },
        },

    }
</script>

<style scoped>
    h4 {
        color: chocolate;
    }
</style>