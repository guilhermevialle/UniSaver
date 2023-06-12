'use client'

import Padding from '../layout/Padding'
import { CgMenuRightAlt } from 'react-icons/cg'
import Image from 'next/image'
import Logo from '../../../public/unisaver_logo_png.png'
import { useRouter } from 'next/navigation'

export default function Topbar() {
  const router = useRouter()

  return (
    <nav className='w-full h-12 py-10 bg-black fixed top-0 left-0 z-10'>
      <Padding stretch={true}>
        <div className='w-full h-full flex items-center justify-between'>
          <button className='text-3xl' onClick={() => router.push('/')}>
            <Image src={Logo} width={48} height={48} alt='UniSaver' />
          </button>
          <button>
            <i>
              <CgMenuRightAlt size={28} />
            </i>
          </button>
        </div>
      </Padding>
    </nav>
  )
}
