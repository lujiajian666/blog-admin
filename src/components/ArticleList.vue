<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="日期">
      </el-table-column>
      <el-table-column prop="text" label="姓名">
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
    created(){
      articleService.get().then(res =>{
        this.tableData.push(...res.data)
        console.log(this.tableData)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>