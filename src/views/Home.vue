<template>
  <div class="home">
    <AddPost />
    <PostList v-bind:posts="posts"/>
  </div>
</template>

<script>
import axios from 'axios'

import AddPost from './AddPost.vue'
import PostList from './PostList.vue'
export default {
  name: 'Home',
  components: {
    AddPost,
    PostList
  },
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    .then(res => {
      this.posts = res.data;
      console.log('Data', this.posts)
    })
    .catch(e => {
      this.errors.push(e);
      console.log(this.errors)
    });
  }
}
</script>
