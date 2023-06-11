import Format from '@/components/Format'
import Search from '@/components/Search'
import VideoCard from '@/components/cards/Video'
import Padding from '@/components/layout/Padding'
import { AudioFormat, Video, VideoFormat } from '@/types'
import megabytes from '@/utils/megabytes'
import { v4 } from 'uuid'

type Props = {
  id: string
  video: Video | undefined
  formats: {
    audios: AudioFormat[] | undefined
    videos: VideoFormat[] | undefined
  }
}

export default function TheVideo({ id, video, formats }: Props) {
  if (!video || !formats.audios || !formats.videos) return null

  return (
    <main className='w-screen h-screen'>
      <Padding stretch={true}>
        <div className='my-6 space-y-6'>
          <Search />
        </div>
        <div className='w-full'>
          <VideoCard details={video} />

          <h1 className='text-lg mt-8 mb-3 font-medium'>Download options</h1>

          <div className='w-full space-y-6'>
            <div className='w-full'>
              <h1 className='text-base text-neutral-300 mb-2'>Audio formats</h1>
              <div className='w-full h-[200px] overflow-y-auto py-2 space-y-2'>
                {formats.audios?.map((audio) => {
                  return (
                    <Format
                      key={v4()}
                      fields={{
                        first: audio.audioBitrate + 'k',
                        second: megabytes(Number(audio.contentLength)),
                      }}
                    />
                  )
                })}
              </div>
            </div>

            <div className='w-full'>
              <h1 className='text-base text-neutral-300 mb-2'>Video formats</h1>
              <div className='w-full h-[200px] overflow-y-auto py-2 space-y-2'>
                {formats.videos?.map((video) => {
                  return (
                    <Format
                      key={v4()}
                      fields={{
                        first: video.qualityLabel,
                        second: megabytes(Number(video.contentLength)),
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </main>
  )
}
