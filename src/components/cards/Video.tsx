/* eslint-disable @next/next/no-img-element */

import { Video } from '@/types'

type Props = {
  details: Video
}

export default function VideoCard({ details }: Props) {
  return (
    <div className='w-[340px] h-[300px] border-[1px] border-neutral-800 bg-neutral-900 bg-opacity-50 rounded-md overflow-hidden'>
      <div className='w-full h-[180px]'>
        <img className='w-full h-full object-cover' src={details.thumbnail} />
      </div>
    </div>
  )
}
