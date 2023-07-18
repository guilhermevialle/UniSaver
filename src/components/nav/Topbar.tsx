'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { SiGithub } from 'react-icons/si'
import Logo from '../../../public/logo.png'

import Padding from '../layout/Padding'
import Button from '../lib/buttons/Default'

export default function Topbar() {
  const router = useRouter()

  return (
    <nav className='w-full h-12 py-10 bg-neutral-950 fixed top-0 left-0 z-10'>
      <Padding stretch={true}>
        <div className='w-full h-full flex items-center justify-between'>
          <button
            className='text-base font-medium flex gap-x-2.5 items-center'
            onClick={() => router.push('/')}
          >
            <Image src={Logo} height={23} width={23} alt='Youtube Catcher' />
            <h1 className='text-neutral-300'>Catcher</h1>
          </button>
          <div className='h-fit flex gap-x-3 items-center'>
            <a href='https://github.com/guilhermevialle'>
              <Button>
                <SiGithub />
                guilhermevialle
              </Button>
            </a>
          </div>
        </div>
      </Padding>
    </nav>
  )
}
