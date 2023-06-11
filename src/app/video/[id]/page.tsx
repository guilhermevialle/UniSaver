import TheVideo from '@/pages/TheVideo'
import {
  findTargetAudioFormats,
  findTargetFullFormats,
  findTargetVideoFormats,
  findUniqueVideo,
} from '@/services/api'

type Props = {
  params: { id: string }
}

export default async function ServerVideo({ params }: Props) {
  const id = decodeURIComponent(params.id)
  const video = await findUniqueVideo(id)
  const formats = {
    audios: await findTargetAudioFormats(id),
    videos: await findTargetVideoFormats(id),
    full: await findTargetFullFormats(id),
  }

  return <TheVideo video={video} id={id} formats={formats} />
}
