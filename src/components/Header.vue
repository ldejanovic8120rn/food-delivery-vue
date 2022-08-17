<template>
    <div class="naslov">
        <h1>Food Delivery</h1>
        <h3 v-if="subtitle">{{ subtitle }}</h3>
        <hr />
    </div>
</template>

<script>

    export default {
        name: 'Header',

        props: {
            subtitle: String
        }
    }

</script>

<style scoped>
    hr {
        border-color: slategray;
        border-width: 2px;
    }
    .naslov {
        padding-top: 15px;
        margin-bottom: 25px;
    }
</style>