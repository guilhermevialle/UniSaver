import Format from '@/components/Format'
import Search from '@/components/Search'
import VideoCard from '@/components/cards/Video'
import Padding from '@/components/layout/Padding'
import { AudioFormat, FullFormat, Video, VideoFormat } from '@/types'
import megabytes from '@/utils/megabytes'
import { v4 } from 'uuid'

type Props = {
  id: string
  video: Video | undefined
  formats: {
    audios: AudioFormat[] | undefined
    videos: VideoFormat[] | undefined
    full: FullFormat[] | undefined
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
                {formats.audios?.map((format) => {
                  return (
                    <Format
                      video={video}
                      format={format}
                      key={v4()}
                      fields={{
                        first: format.audioBitrate + 'k',
                        second: megabytes(Number(format.contentLength)) + 'MB',
                      }}
                    />
                  )
                })}
              </div>
            </div>

            <div className='w-full'>
              <h1 className='text-base text-neutral-300 mb-2'>Video formats</h1>
              <div className='w-full h-[200px] overflow-y-auto py-2 space-y-2'>
                {formats.videos?.map((format) => {
                  return (
                    <Format
                      key={v4()}
                      video={video}
                      format={format}
                      fields={{
                        first: format.qualityLabel,
                        second: megabytes(Number(format.contentLength)) + 'MB',
                      }}
                    />
                  )
                })}
              </div>
            </div>

            <div className='w-full'>
              <h1 className='text-base text-neutral-300 mb-2'>Full formats</h1>
              <div className='w-full h-[200px] overflow-y-auto py-2 space-y-2'>
                {formats.full?.map((format) => {
                  return (
                    <Format
                      key={v4()}
                      video={video}
                      format={format}
                      fields={{
                        first: format.qualityLabel,
                        second: format.quality,
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
