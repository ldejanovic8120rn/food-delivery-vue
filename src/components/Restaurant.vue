<template>
    <div class="m-4 restaurant">
        <b-container class="bv-example-row border border-info rounded-pill">
            <b-row class="justify-content-md-center m-4">
                <b-col>
                    <b-img thumbnail fluid
                        src="https://img.freepik.com/free-vector/golden-retro-restaurant-logo-collection_23-2148385741.jpg?w=2000"
                        alt="Restaurant" height="330px" width="330px">
                    </b-img>
                </b-col>
                <b-col class="m-4">
                    <b-row class="p-1">
                        <h5>Name: {{restaurant.name}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Kitchen: {{restaurant.kitchen}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>City: {{restaurant.city}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Address: {{restaurant.street}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Phone: {{restaurant.phone}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5>Delivery price: {{restaurant.delivery_price}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <b-button pill variant="info">Menu</b-button>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>

    export default {
        name: 'Header',

        props: {
            restaurant: Object
        }
    }

</script>

<style scoped>

</style>