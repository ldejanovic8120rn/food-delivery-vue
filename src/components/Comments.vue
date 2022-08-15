<template>
    <div>
        <h3 style="padding-top: 70px;">Comments</h3>

        <div v-if="token">
            <div>
                <b-container class="komentar">
                    <b-form-textarea v-model="content" id="textarea-auto-height" placeholder="Leave a comment..."
                        rows="6">
                    </b-form-textarea>
                </b-container>
                <b-button @click="onSubmit" pill variant="info" size="lg">Send</b-button>
            </div>


            <div v-for="comment in comments" :key="comment.id" class="m-4">
                <b-container class="bv-example-row border border-info rounded-pill comment">
                    <b-row class="justify-content-md-center m-4">
                        <b-col class="m-4">
                            <b-row class="p-1">
                                <b-icon class="m-3" icon="person-circle" scale="3"></b-icon>
                                <h4 class="m-3"><b>{{ comment.user.first_name }} {{comment.user.last_name}}</b></h4>
                            </b-row>
                            <b-row>
                                <h5 class="p-3">{{ comment.content }}</h5>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
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
                'currentRestaurant',
                'comments'
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
    .comment {
        width: 50%;
    }

    .komentar {
        padding-top: 30px;
        padding-bottom: 10px;
        width: 40%;
    }

</style>