<template>
  <div class="editArticle">
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
      @blur="onEditorBlur($event)" 
      @focus="onEditorFocus($event)"
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
        editorOption: {
          height: '400px'
        }
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
        articleService.add({
          text: this.content
        }).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
 .editArticle {
   height: 500px;
   .ql-container {
      height: 300px;
   }
 }
</style>