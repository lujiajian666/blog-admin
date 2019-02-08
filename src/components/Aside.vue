<template>
  <div class="page-aside">
    <el-menu  :router="true">
      <el-menu-item index="1"  :route="{name: 'bar'}">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </el-menu>
    <el-menu default-active="2" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" :route="{name: 'editArticle'}" @click.native="changePath('添加文章', 'hello')">添加文章</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-2" :route="{name: 'articleList'}">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
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
        this.$store.dispatch('addPath', {
          title,
          to
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>