import { post, get } from './axios'
export default {
    url: {
        add: '/article/add',
        get: '/article/get'
    },

    add(data) {
      return post(this.url.add, data)
    },
    get(id) {
      return get(this.url.get)
    }
}