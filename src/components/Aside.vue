<template>
  <div class="page-aside">
    <el-menu :default-active="asideIndex" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" :route="{name: 'editArticle'}">添加文章</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-2" :route="{name: 'articleList'}">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
           <i class="el-icon-star-off"></i>
           <span>类别</span>
        </template>
        <el-menu-item index="2-1" :route="{name: 'typeList'}">列表</el-menu-item>
        <el-menu-item index="2-2" :route="{name: 'typeEdit'}">添加/编辑</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'Aside',
    data() {
      return {
        path: {
          article: {
            edit: [{
              title: '文章',
              to: 'articleList'
            }, {
              title: '添加文章',
              to: 'editArticle'
            }],
            list: [{
              title: '文章',
              to: 'articleList'
            }, {
              title: '文章列表',
              to: 'articleList'
            }]
          },
          type: {
            list: [{
                title: '类别',
                to: 'typeList'
              },
              {
                title: '类别列表',
                to: 'typeList'
              }
            ],
            edit: [{
                title: '类别',
                to: 'typeList'
              },
              {
                title: '类别变更',
                to: 'typeEdit'
              }
            ]
          }
        }
      }
    },
    props: {
      msg: String
    },
    methods: {

    },
    computed: {
      asideIndex() {
        const index = this.$route.name
        //更新面包屑
        const breadcrumbIndexMap = {
          'editArticle': this.path.article.edit,
          'articleList': this.path.article.list,
          'typeList': this.path.type.list,
          'typeEdit': this.path.type.edit
        }
        this.$store.dispatch('addPath', breadcrumbIndexMap[index])
        //更新aside选中项
        const asideIndexMap = {
          'editArticle': '1-1',
          'articleList': '1-2'
        }
        return asideIndexMap[index]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .page-aside {
    .el-menu {
      border: none
    }
  }
</style>