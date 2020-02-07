import { post, get } from './axios'
export default {
    url: {
        add: '/article/type/add',
        get: '/article/type/get',
        del: '/article/type/delete',
        update: '/article/type/update'
    },

    add(data) {
      return post(this.url.add, data)
    },
    get(data) {
      return get(this.url.get, data)
    },
    del(data) {
      return get(this.url.del, data)
    },
    update(data) {
      return post(this.url.update, data)
    }
}