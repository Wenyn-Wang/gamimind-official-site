import axios from 'axios'

export function getPosts() {
  return axios.post('/api/posts').then(res => res.data)
}

export function getPost(body) {
  return axios.post('/api/posts/show', body).then(res => res.data)
}
