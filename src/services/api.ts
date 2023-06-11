import { Video } from '@/types'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://yt-down-api.vercel.app',
})

export async function findManyVideos(
  query: string
): Promise<Video[] | undefined> {
  try {
    const { data } = await api.get(`/videos/${query}`)
    return data
  } catch (error) {
    return undefined
  }
}
