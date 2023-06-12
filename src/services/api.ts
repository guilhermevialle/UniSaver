import { AudioFormat, FullFormat, Video, VideoFormat } from '@/types'
import axios from 'axios'

// export const api = axios.create({
//   baseURL: 'https://unisaver-api.vercel.app',
// })
export const api = axios.create({
  baseURL: 'http://localhost:9090',
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

export async function findTargetFullFormats(
  id: string
): Promise<FullFormat[] | undefined> {
  try {
    const { data } = await api.get(`/video_both/${id}`)
    return data
  } catch (error) {
    return undefined
  }
}

export async function getFormatBlob(
  format: AudioFormat | VideoFormat | FullFormat,
  url: string
): Promise<Blob | undefined> {
  try {
    const { data } = await api.post(
      `/format/pipe`,
      {
        format,
        url,
      },
      {
        responseType: 'blob',
      }
    )
    return data
  } catch (error) {
    console.log(error)
    return undefined
  }
}
