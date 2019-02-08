import { post, get } from './axios'
export default {
    url: {
        add: '/article/add',
        get: '/article/get',
        del: '/article/del'
    },

    add(data) {
      return post(this.url.add, data)
    },
    get() {
      return get(this.url.get)
    },
    del(data) {
      return get(this.url.del, data)
    }
}