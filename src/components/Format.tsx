'use client'

import { getFormatBlob } from '@/services/api'
import { AudioFormat, FullFormat, Video, VideoFormat } from '@/types'
import downloadBlobFile from '@/utils/save'
import { FiDownload } from 'react-icons/fi'

type Props = {
  video: Video
  format: VideoFormat | AudioFormat | FullFormat
  fields: {
    first: string | React.ReactNode
    second: string | React.ReactNode
  }
}

export default function Format({ fields, format, video }: Props) {
  const { first, second } = fields

  async function saveThisFile() {
    const blob = await getFormatBlob(format, video.url)
    console.log(format.container)

    if (!blob) return

    await downloadBlobFile({
      blob,
      title: `[UniSaver] ${video.title}.${format.container}`,
    })
  }

  return (
    <div className='w-full h-[70px] border-[1px] border-neutral-900 rounded-md flex items-center p-3 justify-around text-neutral-400 text-sm'>
      <div>{first}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <div>{second}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <button
        className='focus:text-emerald-400 transition-all'
        onClick={() => saveThisFile()}
      >
        <i>
          <FiDownload />
        </i>
      </button>
    </div>
  )
}
