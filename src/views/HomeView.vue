<template>
  <div class="home">
    <Header subtitle="Home" />

    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid
            src="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-300x300.jpg"
            alt="Pizza"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid
            src="https://simply-delicious-food.com/wp-content/uploads/2022/06/Pasta-alla-Norma5-300x300.jpg"
            alt="Pasta"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid
            src="https://simply-delicious-food.com/wp-content/uploads/2020/08/Bourbon-basted-cheeseburger-2-300x300.jpg"
            alt="Burger"></b-img>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/barbecue-beef-be536ca.jpg"
            alt="Barbecue"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid
            src="https://i.pinimg.com/474x/b9/99/c1/b999c18b127b86814d99e5415468f67a--onion-recipes-chicken-recipes.jpg"
            alt="Fish"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://brasserieblanc.com/wp-content/uploads/2022/03/ALC8-300x300.jpg"
            alt="Desserts"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue'

  export default {
    name: 'HomeView',

    components: {
      Header
    }
  }
</script>


<style>

</style>
