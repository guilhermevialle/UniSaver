'use client'

import Padding from '../layout/Padding'
import { CgMenuRightAlt } from 'react-icons/cg'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Topbar() {
  const router = useRouter()

  return (
    <nav className='w-full h-12 py-10 bg-neutral-950 fixed top-0 left-0 z-10'>
      <Padding stretch={true}>
        <div className='w-full h-full flex items-center justify-between'>
          <button
            className='text-base font-semibold'
            onClick={() => router.push('/')}
          >
            UniSaver
          </button>
          <div className='h-fit flex gap-x-3 items-center'>
            <button className='text-sm text-zinc-400 font-medium hover:text-neutral-300 transition-all'>
              <Link href={'https://github.com/guilhermevialle/unisaver'}>
                Contribute
              </Link>
            </button>
          </div>
        </div>
      </Padding>
    </nav>
  )
}
