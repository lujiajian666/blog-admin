import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        path: []
    },
    mutations: {
        addPath(state, {title, to}) {
            state.path.push({
                title,
                to
            })
        },
        deletePath(state) {
            state.path.pop()
        }
    },
    actions: {
        addPath({
            commit
        }, { title, to }) {
            commit('deletePath');
            commit('addPath', { title, to });
        }
    }
})

export default store