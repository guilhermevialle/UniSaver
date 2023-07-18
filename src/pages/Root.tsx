import Footer from '@/components/Footer'
import Search from '@/components/Search'
import Topbar from '@/components/nav/Topbar'
import TopbarSpace from '@/components/nav/TopbarSpace'
import { Benefit } from '@/types'

import { FaHandHoldingHeart } from 'react-icons/fa'
import { MdAccessibilityNew, MdShield, MdSpeed } from 'react-icons/md'

const Benefits: Benefit[] = [
  {
    icon: <MdSpeed size={24} />,
    title: 'Easy & Fast',
    p: 'UniSaver stands out for its speed and ease. With just a few clicks, users can download high-quality videos directly from YouTube, saving time and hassle.',
  },
  {
    icon: <FaHandHoldingHeart size={24} />,
    title: 'Totally free',
    p: 'There are no costs associated with using the platform, allowing users to download their favorite videos free of charge. This free approach provides users with an affordable and convenient solution to get YouTube content quickly and easily.',
  },
  {
    icon: <MdAccessibilityNew size={24} />,
    title: 'Accessibility',
    p: 'UniSaver is responsive across all devices, making the process of downloading videos quick and easy, no matter where you are.',
  },

  {
    icon: <MdShield size={24} />,
    title: 'Safe',
    p: 'You can download your favorite videos with peace of mind, knowing that your information is protected from any kind of unauthorized access. User safety is a priority.',
  },
]

export default function Root() {
  return (
    <main className='w-screen h-screen'>
      <Topbar />
      <TopbarSpace />
      <section className='w-full h-[70vh] flex items-center justify-center'>
        <div className='w-[90%] max-w-[400px]'>
          <div className='mt-6'>
            <h1 className='text-xl'>Save videos & songs from YouTube</h1>
            <div className='my-4'>
              <Search />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  )
}
