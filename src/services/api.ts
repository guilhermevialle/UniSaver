import { AudioFormat, Video, VideoFormat } from '@/types'
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

export async function findUniqueVideo(id: string): Promise<Video | undefined> {
  try {
    const { data } = await api.get(`/video/${id}`)
    return data
  } catch (error) {
    return undefined
  }
}

export async function findTargetAudioFormats(
  id: string
): Promise<AudioFormat[] | undefined> {
  try {
    const { data } = await api.get(`/video_audio/${id}`)
    return data
  } catch (error) {
    return undefined
  }
}

export async function findTargetVideoFormats(
  id: string
): Promise<VideoFormat[] | undefined> {
  try {
    const { data } = await api.get(`/video_video/${id}`)
    return data
  } catch (error) {
    return undefined
  }
}
