import axios from 'axios'

export function createContact(body) {
  return axios.post('/api/contacts/create', body).then(res => res.data)
}
