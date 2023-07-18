import Footer from '@/components/Footer'
import Search from '@/components/Search'
import IconCard from '@/components/cards/IconCard'
import Padding from '@/components/layout/Padding'
import Topbar from '@/components/nav/Topbar'
import TopbarSpace from '@/components/nav/TopbarSpace'
import { Benefit } from '@/types'

import { FaHandHoldingHeart } from 'react-icons/fa'
import { MdAccessibilityNew, MdShield, MdSpeed } from 'react-icons/md'
import { v4 } from 'uuid'

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
    <main className='w-screen h-fit'>
      <Topbar />
      <TopbarSpace />
      <Padding stretch={true}>
        <section className='w-full h-full'>
          <div className='mt-6'>
            <h1 className='text-2xl'>Save videos & songs from YouTube</h1>
            <div className='my-4'>
              <Search />
            </div>
          </div>

          <div className='w-full'>
            <h1 className='text-xl text-neutral-300 my-10'>
              Why use UniSaver?
            </h1>

            <div className='w-full h-fit flex flex-wrap items-center justify-between gap-6'>
              {Benefits.map((benefit) => {
                return (
                  <div
                    key={v4()}
                    className='w-full sm:w-[48%] lg:w-[31%] h-[240px]'
                  >
                    <IconCard
                      title={benefit.title}
                      p={benefit.p}
                      icon={benefit.icon}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Padding>
      <Footer />
    </main>
  )
}
