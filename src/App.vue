<template>
  <div id="app">
    <MyNavbar/>
    <div class="pt-3"></div> 
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="container"/>
    <div class="pt-5"></div> 
    <MyBottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyNavbar from '@/components/Navbar.vue'
import MyBottom from '@/components/Bottom.vue'

export default {
  name: 'home',
  components: {
    MyNavbar,
    MyBottom
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
