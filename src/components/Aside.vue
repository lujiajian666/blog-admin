<template>
  <div class="page-aside">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1" @click.native="changePath('文章', 'hello')" :route="{name: 'hello'}">
        <i class="el-icon-menu"></i>
        <span slot="title">文章</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Aside',
    props: {
      msg: String
    },
    methods: {
      changePath(title, to) {
        console.log(title, to)
        this.$store.dispatch('addPath', {title, to})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>