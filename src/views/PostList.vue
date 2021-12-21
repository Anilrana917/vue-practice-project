<template>
    <div>
       
        <div class="post-list">
      
            <div class="card mt-3" v-for="post in posts" :key="post.id">
              <div class="card-body">
                <h3><router-link :to="{ name: 'PostDetails', params: { id: post.id }}">{{post.title}} {{post.id}} </router-link></h3>
                <p>{{post.body}}</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
// import PostDetails from './PostDetails'
export default {
    name: 'PostList',
    // components:{
    //   PostDetails
    //   },
    props: ["posts"],
}
</script>

<style>

</style>