<template>
  <div class="post-details">
      <div class="card">
          <div class="card-body">
            <h1>shashi</h1>
          </div>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'PostDetails',
    data() {
        return {
            post: [],
        
        }
    },
    created() {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        // .then(res =>{
        //     this.post = res.data
        //     console.log(this.post)
        // })
        // .catch(e =>{
        //     this.errors.push(e);
        // })
    },
    mounted(){
        
        // console.log(this)
        
    }
}
</script>

<style>

</style>