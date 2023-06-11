/* eslint-disable @next/next/no-img-element */

import { Video } from '@/types'

type Props = {
  details: Video
}

export default function VideoCard({ details }: Props) {
  return (
    <div className='w-full h-[300px] border-[1px] border-neutral-800 bg-neutral-900 bg-opacity-50 rounded-md overflow-hidden'>
      <div className='w-full h-[180px] relative'>
        <span className='absolute px-1.5 py-0.5 bg-black right-3 bottom-3 rounded-md'>
          {details.timestamp}
        </span>
        <img
          className='w-full h-full object-cover'
          src={details.thumbnail}
          alt={details.title}
        />
      </div>

      <div className='w-full h-[40px] p-3 flex items-center'>
        <h1 className='text-lg font-medium truncate'>{details.title}</h1>
      </div>

      <div className='w-full h-[80px] px-3'>
        <h3>{details.author.name}</h3>
        <h3>{details.views}</h3>
        <h3>{details.ago}</h3>
      </div>
    </div>
  )
}
