<template>
    <div class="container">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue' 

export default {
  name: 'App',
  components: {
      Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}

.container {
    background-color: #70E4EF11;
    height: 100vh;
}
</style>
