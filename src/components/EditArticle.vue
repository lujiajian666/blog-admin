<template>
  <div class="editArticle">
    <div style="margin-bottom: 50px; width: 40%">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
    </div>

    <el-switch v-model="turnOn" active-text="启用" inactive-text="停用"></el-switch>

    <br>
    <br>
    <br>

    <div>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type"
        @close="handleClose(tag)"
      >{{tag.name}}</el-tag>
    </div>

    <br>
    <br>
    <br>

    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>

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
        turnOn: false,
        editorOption: {
          height: '400px'
        },
        tags: [{
            name: '标签一',
            type: ''
          },
          {
            name: '标签二',
            type: 'success'
          },
          {
            name: '标签三',
            type: 'info'
          },
          {
            name: '标签四',
            type: 'warning'
          },
          {
            name: '标签五',
            type: 'danger'
          }
        ]
      }
    },
    created() {
      if (this.$route.params.id) {
        const article = this.$store.state.articleData;
        ({
          text: this.content,
          title: this.title,
          status: this.turnOn 
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
            title: this.title,
            status: this.turnOn ? 1: 0
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
            id: this.$route.params.id,
            status: this.turnOn ? 1: 0
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
      },
      //删除tag事件
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
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

  .el-tag {
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
}
</style>