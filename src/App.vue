<template>
    <el-container v-if="false">
      <el-aside width="200px">
        <aside-page></aside-page>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <router-view v-else>
    </router-view>
</template>

<script>
  import aside from './page/aside/Aside.vue'
  export default {
    name: 'app',
    components: {
      asidePage: aside
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>