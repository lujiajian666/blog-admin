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
    get(data) {
      return get(this.url.get, data)
    },
    del(data) {
      return get(this.url.del, data)
    }
}