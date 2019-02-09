import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        path: [],
        articleData: null
    },
    mutations: {
        addPath(state, path) {
            state.path = path
        },
        saveArticle(state, obj) {
            state.articleData = obj
        }
    },
    actions: {
        addPath({
            commit
        },  path) {
            commit('addPath', path);
        }
    }
})

export default store