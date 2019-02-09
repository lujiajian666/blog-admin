import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import cookie from 'js-cookie'

const Index = () => import( /* webpackChunkName: "Index" */ '../page/Index.vue');
const editArticle = () => import( /* webpackChunkName: "Index" */ '../components/EditArticle.vue');
const articleList = () => import( /* webpackChunkName: "Bar" */ '../components/ArticleList.vue');
const Login = () => import( /* webpackChunkName: "login" */ '../page/Login.vue');

const routes = [{
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/',
        component: Index,
        children: [{
                path: 'editArticle/:id?',
                component: editArticle,
                name: 'editArticle'
            },
            {
                path: 'articleList',
                component: articleList,
                name: 'articleList'
            }
        ]
    }
];

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if(to.name !== 'login') {
      const username = cookie.get('username');
      if(!username) {
         console.log('未登陆，请先登陆')
         router.push({'name':'login'})
      } else {
          next();
      }
    } else {
        next();
    }
})

export default router;