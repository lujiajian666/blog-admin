import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        path: [],
        articleData: null,
        typeData: null
    },
    mutations: {
        addPath(state, path) {
            state.path = path
        },
        saveArticle(state, obj) {
            state.articleData = obj;
        },
        saveType(state, obj) {
            state.typeData = obj;
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