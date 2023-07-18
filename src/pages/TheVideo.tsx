'use client'

import Footer from '@/components/Footer'
import Format from '@/components/Format'
import Search from '@/components/Search'
import VideoCard from '@/components/cards/Video'
import Padding from '@/components/layout/Padding'
import Dropdown from '@/components/lib/dropdowns/Dropdown'
import Topbar from '@/components/nav/Topbar'
import TopbarSpace from '@/components/nav/TopbarSpace'
import {
  AudioFormat,
  FormatType,
  FullFormat,
  Video,
  VideoFormat,
} from '@/types'
import megabytes from '@/utils/megabytes'
import { useState } from 'react'
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
  const [option, setOption] = useState<FormatType>('Audio')

  if (!video || !formats.audios || !formats.videos) return null

  function setFormatTypeOption(type: FormatType) {
    setOption(type as FormatType)
  }

  return (
    <main className='w-screen h-fit'>
      <Topbar />
      <TopbarSpace />
      <Padding stretch={true}>
        <div className='w-full h-full'>
          <div className='w-full'>
            <div className='my-6'>
              <Search />
            </div>
            <div className='w-full md:flex md:items-center md:justify-center'>
              <div className='w-full md:w-[733px]'>
                <VideoCard details={video} />
              </div>
            </div>
            <div className='flex justify-between items-center mt-8 mb-3'>
              <h1 className='text-base font-medium'>Download options</h1>
              <Dropdown
                buttonTitle={option}
                sectionTitle='Choose type format'
                buttonSize='w-[120px]'
                sectionSize='w-[180px]'
                options={[
                  {
                    text: 'Audio',
                    clickFn: () => setFormatTypeOption('Audio'),
                  },
                  {
                    text: 'Video',
                    clickFn: () => setFormatTypeOption('Video'),
                  },
                  {
                    text: 'Full',
                    clickFn: () => setFormatTypeOption('Full'),
                  },
                ]}
              />
            </div>
          </div>

          <div className='w-full'>
            {option == 'Audio' ? (
              <div className='w-full h-full'>
                <h1 className='text-sm text-neutral-300 mb-2'>Audio formats</h1>
                <div className='w-full h-[340px] overflow-y-auto py-2 space-y-2'>
                  {formats.audios?.map((format) => {
                    return (
                      <Format
                        video={video}
                        format={format}
                        key={v4()}
                        fields={{
                          first: format.audioBitrate + 'k',
                          second:
                            megabytes(Number(format.contentLength)) + 'MB',
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ) : option == 'Video' ? (
              <div className='w-full h-full'>
                <h1 className='text-base text-neutral-300 mb-2'>
                  Video formats
                </h1>
                <div className='w-full h-[340px] overflow-y-auto py-2 space-y-2'>
                  {formats.videos?.map((format) => {
                    return (
                      <Format
                        key={v4()}
                        video={video}
                        format={format}
                        fields={{
                          first: format.qualityLabel,
                          second:
                            megabytes(Number(format.contentLength)) + 'MB',
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className='w-full h-full'>
                <h1 className='text-base text-neutral-300 mb-2'>
                  Full formats
                </h1>
                <div className='w-full h-[340px] overflow-y-auto py-2 space-y-2'>
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
            )}
          </div>
        </div>
      </Padding>
      <Footer />
    </main>
  )
}
