import axios from 'axios'

export const API_URL =
  (process.env.REACT_APP_API as string) || 'http://localhost:3333'

const api = axios.create({
  baseURL: API_URL,
})

export default api
