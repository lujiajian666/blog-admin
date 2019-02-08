<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import articleService from '../service/article'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {
      articleService.get().then(res => {
        this.tableData.push(...res.data)
        console.log(this.tableData)
      })
    },
    methods: {
      del(data) {
        articleService.del({
          id: data.id
        }).then(res => {
          if(res.data > 0) {
            this.tableData.forEach((element, index)=> {
              this.tableData.splice(index, 1);
              this.$message({
                message:'删除成功',
                type: 'success'
              });
            });
          }
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>