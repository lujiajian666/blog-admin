<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="name" label="类别">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :page-size="pageSize" layout="prev, pager, next" :total="total" :current-page.sync="currentPage"
      @current-change="get">
    </el-pagination>
  </div>
</template>

<script>
  import typeService from '@service/type'
  export default {
    data() {
      return {
        tableData: [],
        pageSize: 10,
        total: 0,
        currentPage: 1
      }
    },
    created() {
      this.get()
    },
    methods: {
      get() {
        typeService.get({
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(res => {
          this.tableData = res.data.list;
          this.total = res.data.total;
          this.currentPage = res.data.currentPage;
        })
      },
      del(data) {
        articleService.del({
          id: data.id
        }).then(res => {
          this.tableData.forEach((element, index) => {
            if (element.id === data.id) {
              this.tableData.splice(index, 1);
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }
          });
        })
      },
      edit(data) {
        this.$store.commit('saveType', data);
        this.$router.push({
          name: 'typeEdit',
          params: {
            id: data.id
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>