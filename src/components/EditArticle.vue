<template>
  <div class="editArticle">
    <div style="margin-bottom: 50px; width: 40%">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
    </div>

    <el-switch v-model="turnOn" active-text="启用" inactive-text="停用"></el-switch>
    <br>
    <br>
    <br>

    <div style="margin-bottom: 50px; width: 40%">
      <el-input v-model="markdownName" placeholder="请输入要使用的markdown名称"></el-input>
    </div>

    <div>
      <el-tag v-for="tag in tags" :key="tag.id" closable :type="tag.type" @close="handleClose(tag)"
      @click.native="changeType(tag)">{{tag.name}}
      </el-tag>
    </div>

    <br>
    <br>
    <br>

    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)" @change="onEditorChange($event)"></quill-editor>

    <el-button type="primary" style="margin-top: 30px" @click="submit">提交</el-button>
  </div>
</template>

<script>
  import articleService from '../service/article';
  import typeService from '../service/type';
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
        tagTypes: ['success', 'danger'],
        tags: [],
        markdownName: ''
      }
    },
    created() {
      let myTags = '';
      let p = Promise.resolve();
      if (this.$route.params.id) {
        p = p.then(ret => {
          return articleService.get({
            id: this.$route.params.id
          })
        }).then(ret => {
          ({
            text: this.content,
            title: this.title,
            status: this.turnOn,
            types: myTags,
            markdown_name: this.markdownName
          } = ret.data);
          this.turnOn = !!this.turnOn;
        });
      }

      p = p.then(ret => {
        return this.typeList()
      }).then(res => {
        this.tags.push(...res.data.list.map(item => {
          item.type = this.tagTypes[1];
          return item;
        }))
      }).then(_ => {
        if (myTags) {
          myTags.split(";").forEach(item => {
            this.tags.some(item2 => {
              if (item2.id == item) {
                item2.type = this.tagTypes[0];
                return true;
              } else {
                return false;
              }
            })
          })
        }
      })
    },
    methods: {
      onEditorBlur() { //失去焦点事件
      },
      onEditorFocus() { //获得焦点事件
      },
      onEditorChange() { //内容改变事件
      },
      submit() {
        const types = this.tags.filter(item => {
          return item.type === 'success'
        }).map(item => item.id)
        if (!this.$route.params.id) {
          articleService.add({
            text: this.content,
            title: this.title,
            status: this.turnOn ? 1 : 0,
            types: types.join(";"),
            markdownName: this.markdownName
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
            status: this.turnOn ? 1 : 0,
            types: types.join(";"),
            markdownName: this.markdownName
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
      },
      //变更tag状态
      changeType(tag) {
        tag.type === 'success'? tag.type = 'danger' : tag.type = 'success';
      },
      typeList() {
        return typeService.get({
          currentPage: 1,
          pageSize: 100
        });
      },

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