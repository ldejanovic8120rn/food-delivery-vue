<template>
    <div class="m-4">
        <b-container class="bv-example-row border border-info rounded restaurant">
            <b-row class="justify-content-md-center m-4">
                <b-col class="m-4">
                    <b-row class="p-1">
                        <h4><b>{{ food.name }}</b></h4>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Category: {{ food.category }}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Portion: {{ food.portion }}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Price: {{ food.price }}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Description: {{ food.description }}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <b-button @click="order" pill variant="info">Order</b-button>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>

    export default {
        name: 'Food',

        props: {
            food: Object
        },

        methods: {
            order(e) {

            }
        }
    }

</script>

<style scoped>
    .restaurant {
        width: 50%;
    }
</style>