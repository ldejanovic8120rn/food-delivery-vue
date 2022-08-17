<template>
    <div class="root">
        <div v-for="food in currentRestaurant.foods" :key="food.id" class="m-4">
            <b-container class="border border-info rounded restaurant">
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
                            <h5><b>Price:</b> {{ food.price }}</h5>
                        </b-row>
                        <b-row class="p-1">
                            <h5><b>Description:</b> {{ food.description }}</h5>
                        </b-row>
                        <b-row class="p-1">
                            <b-button @click="order(food)" pill variant="info">Order</b-button>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>

</template>

<script>
    import { mapMutations, mapState } from 'vuex';

    export default {
        name: 'Food',

        computed: {
            ...mapState([
                'currentRestaurant'
            ])
        },

        methods: {
            ...mapMutations([
                'addCartItem',
            ]),

            order(food) {
                this.addCartItem(food);
            }
        }
    }

</script>

<style scoped>
    h4 {
        color: chocolate;
    }
</style>