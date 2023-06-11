'use client'

/* eslint-disable @next/next/no-img-element */

import { Video } from '@/types'
import { useRouter } from 'next/navigation'

type Props = {
  details: Video
}

export default function VideoCard({ details }: Props) {
  const router = useRouter()

  function navigateToVideo() {
    router.push(`/video/${details.videoId}`)
  }

  if (!details) return null

  return (
    <div
      className='w-full h-[280px] border-[1px] border-neutral-800 bg-neutral-900 bg-opacity-50 rounded-md overflow-hidden cursor-pointer hover:bg-opacity-90'
      onClick={() => navigateToVideo()}
    >
      <div className='w-full h-[180px] relative'>
        <span className='absolute px-1.5 py-0.5 bg-black right-3 bottom-3 rounded-md'>
          {details?.timestamp}
        </span>
        <img
          className='w-full h-full object-cover'
          src={details?.thumbnail}
          alt={details?.title}
        />
      </div>

      <div className='w-full h-[40px] p-3 flex items-center'>
        <h1 className='text-base font-medium truncate'>{details?.title}</h1>
      </div>

      <div className='w-full h-[60px] px-3'>
        <h3 className='w-full text-left text-neutral-400 text-sm'>
          {details?.author.name}
        </h3>
        <h3 className='w-full text-left text-neutral-400 text-sm'>
          {details?.views.toLocaleString()} views • {details?.ago}
        </h3>
      </div>
    </div>
  )
}
