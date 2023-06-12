'use client'

import { getFormatBlob } from '@/services/api'
import { AudioFormat, FullFormat, Video, VideoFormat } from '@/types'
import downloadBlobFile from '@/utils/save'
import { FiDownload } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

  async function saveThisFile() {
    if (
      'contentLength' in format &&
      Number(format.contentLength) > 1024 * 1024 * 4.5
    )
      return toast(
        'Vercel does not support downloading files larger than 4.5MB'
      )

    try {
      setDownloading(true)
      const blob = await getFormatBlob(format, video.url)
      if (!blob) return setDownloading(false)

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
    <>
      <ToastContainer hideProgressBar={true} autoClose={2300} theme='dark' />

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
    </>
  )
}
