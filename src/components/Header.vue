<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
       <router-link to="/" class="navbar-brand" >{{siteTitle}}</router-link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
          </div>
    </div>
  </nav>  

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      siteTitle: "Vue Basic App"
    }
  }
};
</script>

<style scoped>
</style>
