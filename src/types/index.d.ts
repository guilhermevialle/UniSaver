// Video result
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

// Audio format
export type AudioFormat = {
  mimeType: string
  qualityLabel: null
  bitrate: number
  audioBitrate: number
  itag: number
  initRange: Range
  indexRange: Range
  lastModified: string
  contentLength: string
  quality: string
  projectionType: string
  averageBitrate: number
  audioQuality: string
  approxDurationMs: string
  audioSampleRate: string
  audioChannels: number
  loudnessDb: number
  url: string
  hasVideo: boolean
  hasAudio: boolean
  container: string
  codecs: string
  videoCodec: null
  audioCodec: string
  isLive: boolean
  isHLS: boolean
  isDashMPD: boolean
  highReplication?: boolean
}

export type Range = {
  start: string
  end: string
}

// Video format
export type VideoFormat = {
  mimeType: string
  qualityLabel: string
  bitrate: number
  audioBitrate: null
  itag: number
  width: number
  height: number
  initRange: Range
  indexRange: Range
  lastModified: string
  contentLength: string
  quality: string
  fps: number
  projectionType: string
  averageBitrate: number
  approxDurationMs: string
  url: string
  hasVideo: boolean
  hasAudio: boolean
  container: string
  codecs: string
  videoCodec: string
  audioCodec: null
  isLive: boolean
  isHLS: boolean
  isDashMPD: boolean
  highReplication?: boolean
  colorInfo?: ColorInfo
}

export type ColorInfo = {
  primaries: string
  transferCharacteristics: string
  matrixCoefficients: string
}

// Full video
export type FullFormat = {
  mimeType: string
  qualityLabel: string
  bitrate: number
  audioBitrate: number
  itag: number
  width: number
  height: number
  lastModified: string
  quality: string
  fps: number
  projectionType: string
  audioQuality: string
  approxDurationMs: string
  audioSampleRate: string
  audioChannels: number
  url: string
  hasVideo: boolean
  hasAudio: boolean
  container: string
  codecs: string
  videoCodec: string
  audioCodec: string
  isLive: boolean
  isHLS: boolean
  isDashMPD: boolean
}

//dropdown
export type DropdownOption = {
  text: string
  clickFn?: () => void
}

export type FormatType = 'Audio' | 'Video' | 'Full'
