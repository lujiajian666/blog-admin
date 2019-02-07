<template>
    <el-container>
        <el-aside width="200px">
            <aside-page></aside-page>
        </el-aside>
        <el-container>
            <el-header>
                <el-breadcrumb separator="/" >
                    <el-breadcrumb-item v-for="(value, index) in path" :key="index" 
                    :to="{ name: value.to }">{{value.title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import aside from '../components/Aside.vue';
    import { mapState } from 'vuex'
    export default {
        name: 'app',
        components: {
            asidePage: aside
        },
        computed: {
          ...mapState([
            'path'
          ])
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>