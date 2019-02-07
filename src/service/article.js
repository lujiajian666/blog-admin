import { post, get } from './axios'
export default {
    url: {
        add: '/article/add'
    },

    add(data) {
      return post(this.url.add, data)
    }
}