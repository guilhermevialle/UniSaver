export type Video = {
  type: string
  videoId: string
  url: string
  title: string
  description: string
  image: string
  thumbnail: string
  seconds: number
  timestamp: string
  duration: Duration
  ago: string
  views: number
  author: Author
}

export type Author = {
  name: string
  url: string
}

export type Duration = {
  seconds: number
  timestamp: string
}
