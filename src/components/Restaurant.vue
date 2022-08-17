<template>
    <div class="m-4 restaurant">
        <b-container fluid class="border border-info rounded" >
            <b-row class="justify-content-md-center m-4">
                <b-col>
                    <b-img v-if="restaurant.kitchen == `Serbian`" thumbnail fluid
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/barbecue-beef-be536ca.jpg"
                        alt="Restaurant">
                    </b-img>
                    <b-img v-else-if="restaurant.kitchen == `Italian`" thumbnail fluid
                        src="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-300x300.jpg"
                        alt="Restaurant">
                    </b-img>
                    <b-img v-else-if="restaurant.kitchen == `Chinese`" thumbnail fluid
                        src="https://www.metro.ca/userfiles/image/chinese-new-year/chinesedishes-300x300.jpg"
                        alt="Restaurant">
                    </b-img>
                    <b-img v-else-if="restaurant.kitchen == `Mexican`" thumbnail fluid
                        src="https://alidahitthespot.com/wp-content/uploads/2021/09/mexican-food-enchiladas-alida-hit-the-spot-300x300.jpg"
                        alt="Restaurant">
                    </b-img>
                    <b-img v-else-if="restaurant.kitchen == `Mediteran`" thumbnail fluid
                        src="https://i.pinimg.com/474x/b9/99/c1/b999c18b127b86814d99e5415468f67a--onion-recipes-chicken-recipes.jpg"
                        alt="Restaurant">
                    </b-img>
                    <b-img v-else thumbnail fluid
                        src="https://images.kupujemprodajem.com//photos/oglasi/1/34/47042341/tmb-300x300-47042341_59345f7c1c8a47-59113981Fast-food-hamburger-.jpg"
                        alt="Restaurant">
                    </b-img>
                </b-col>
                <b-col class="m-4">
                    <b-row class="p-1">
                        <h4><b>{{restaurant.name}}</b></h4>
                    </b-row>
                    <b-row class="p-1">
                        <h5><b>Kitchen:</b> {{restaurant.kitchen}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5><b>City:</b> {{restaurant.city}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5><b>Address:</b> {{restaurant.street}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5><b>Phone:</b> {{restaurant.phone}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <h5><b>Delivery price:</b> {{restaurant.delivery_price}}</h5>
                    </b-row>
                    <b-row class="p-1">
                        <b-button @click="singleRestaurant" pill variant="info">More</b-button>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>

    export default {
        name: 'Restaurant',

        props: {
            restaurant: Object
        },

        methods: {
            singleRestaurant(e) {
                e.preventDefault();

                this.$router.push({ name: 'SingleRestaurant', params: { id: this.restaurant.id } });
            }
        }
    }

</script>

<style scoped>
    h4 {
        color: chocolate;
    }

</style>