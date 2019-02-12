<template>
  <div class="editArticle">
    <div style="margin-bottom: 50px; width: 40%">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
    </div>

    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>

    <el-button type="primary" style="margin-top: 30px" @click="submit">提交</el-button>
  </div>
</template>

<script>
  import articleService from '../service/article'
  export default {
    name: 'editArticle',
    data() {
      return {
        content: null,
        title: '',
        editorOption: {
          height: '400px'
        }
      }
    },
    created() {
      if (this.$route.params.id) {
        const article = this.$store.state.articleData;
        ({
          text: this.content,
          title: this.title
        } = article)
      }
    },
    methods: {
      onEditorBlur() { //失去焦点事件
      },
      onEditorFocus() { //获得焦点事件
      },
      onEditorChange() { //内容改变事件
      },
      submit() {
        if (!this.$route.params.id) {
          articleService.add({
            text: this.content,
            title: this.title
          }).then(res => {
            if (res.ret === 0) {
              this.$message({
                message: '添加成功',
                type: 'success'
              });
              this.$router.push({
                name: 'articleList'
              })
            }
          })
        } else {
          articleService.update({
            text: this.content,
            title: this.title,
            id: this.$route.params.id
          }).then(res => {
            this.$message({
              message: res.msg || '更新成功',
              type: 'success'
            })
            this.$router.push({
              name: 'articleList'
            })
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .editArticle {
    .ql-container {
      height: 300px;
    }
  }
</style>