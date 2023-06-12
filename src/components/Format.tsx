'use client'

import { getFormatBlob } from '@/services/api'
import { AudioFormat, FullFormat, Video, VideoFormat } from '@/types'
import downloadBlobFile from '@/utils/save'
import { FiDownload } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'

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
  const [isDownloading, setDownloading] = useState<boolean>(false)

  console.log({ first, format, url: video.url })

  async function saveThisFile() {
    try {
      setDownloading(true)
      const blob = await getFormatBlob(format, video.url)
      if (!blob) return

      await downloadBlobFile({
        blob,
        title: `[UniSaver] ${video.title}.${format.container}`,
      })
      setDownloading(false)
    } catch (error) {
      setDownloading(false)
    }
  }

  return (
    <div className='w-full h-[70px] border-[1px] border-neutral-900 rounded-md flex items-center p-3 justify-around text-neutral-400 text-sm'>
      <div>{first}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <div>{second}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <button
        id='download-button'
        className='focus:text-emerald-400 transition-all'
        onClick={() => saveThisFile()}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <div className='animate-spin transition-all'>
            <ImSpinner2 />
          </div>
        ) : (
          <FiDownload />
        )}
      </button>
    </div>
  )
}
