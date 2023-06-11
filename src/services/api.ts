import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://yt-down-api.vercel.app',
})
