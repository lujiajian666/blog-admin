<template>
  <router-view>
  </router-view>
</template>

<script>
  import aside from './components/Aside'
  export default {
    name: 'app',
    components: {
      asidePage: aside
    },
    mounted() {
      document.title = "陆家键的个人博客"
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>