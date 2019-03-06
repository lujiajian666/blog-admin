<template>
  <div class="login-page">
    <div class="form-box">
      <div>
        <el-form ref="form" :model="form" label-width="40px">
          <el-form-item label="账号" style="color: white">
            <el-input v-model="form.username" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="密码" style="color: white">
            <el-input type="password" v-model="form.password" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    post
  } from '@service/axios';
  import cookie from 'js-cookie'
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        post('/article/login', this.form).then(res => {
          cookie.set('username', this.form.username);
          this.$router.push({
            name: 'editArticle'
          });
        }).catch(err => {
          this.$message({
            message: err.message,
            type: 'warning'
          });
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  .login-page {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('~@pic/bg.jpg') no-repeat fixed center center;
    background-size: cover;
    justify-content: center;
    align-items: center;

    .form-box {
      position: relative;

      &>div {
        position: relative;
        z-index: 10;
        padding: 80px 130px;
      }

      &::after {
        content: '';
        position: absolute;
        top: -5%;
        left: -5%;
        width: 110%;
        height: 110%;
        background: url('~@pic/bg.jpg') no-repeat fixed center center;
        background-size: cover;
        filter: blur(10px);
        opacity: .8;
      }
    }

    .el-form-item__label {
      color: white
    }
  }
</style>