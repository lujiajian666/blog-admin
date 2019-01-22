import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const Foo = () => import(/* webpackChunkName: "foo" */'../components/HelloWorld.vue');
const Bar = () => import(/* webpackChunkName: "bar" */'../components/Bar.vue');
const Login = () => import(/* webpackChunkName: "login" */'../page/login/Login.vue');

const routes = [
    { path: '/', component: Login, name: 'login'},
    { path: '/foo', component: Foo, name: 'foo' },
    { path: '/bar', component: Bar, name: 'bar' }
];

const router = new VueRouter({
    routes 
})
  
export default router;