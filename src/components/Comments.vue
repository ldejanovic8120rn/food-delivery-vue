<template>
    <div>
        <h4>User Comments</h4>

        <div v-if="token">
            <b-form-input 
                v-model="content" 
                placeholder="Say something..." 
                @keydown.enter="onSubmit">
            </b-form-input>

            <b-card v-for="comment in currentRestaurant.comments" :title="comment.user.username" :key="comment.id">
                <b-card-text>
                    {{ comment.content }}
                </b-card-text>
            </b-card>
        </div>
        <p v-else>You must be signed in to leave a comment</p>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'Comments',

        data() {
            return {
                content: ''
            }
        },

        computed: {
            ...mapState([
                'token',
                'currentRestaurant'
            ])
        },

        methods: {
            onSubmit() {
                this.$socket.emit('comment', { content: this.content, restaurant_id: this.currentRestaurant.id, token: this.token });
                this.content = '';
            }
        }
    }

</script>

<style scoped>
    .card {
        margin-top: 10px;
        text-align: left;
    }

    .card-title {
        margin-bottom: 0px;
    }

    .card-body {
        padding-bottom: 5px;
    }
</style>