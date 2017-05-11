import axios from 'axios'

export function getPosts() {
  return axios.post('/api/posts').then(res => res.data)
}
