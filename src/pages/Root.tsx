import Search from '@/components/Search'
import IconCard from '@/components/cards/IconCard'
import Padding from '@/components/layout/Padding'

//icons
import { MdSpeed } from 'react-icons/md'

export default function Root() {
  return (
    <main className='w-screen h-screen'>
      <Padding stretch={true}>
        <section className='w-full h-full'>
          <h1 className='text-neutral-200 text-3xl'>
            Save videos & songs from YouTube
          </h1>

          <div className='my-4'>
            <Search />
          </div>

          <div className='w-full text-neutral-200'>
            <h1 className='text-xl my-10'>Why use UniSaver?</h1>

            <div className='w-full h-fit flex flex-wrap items-center justify-center gap-6'>
              <IconCard
                title='Easy & fast'
                p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto! Voluptas reprehenderit porro quaerat omnis accusantium tempore aliquam'
                icon={<MdSpeed size={24} />}
              />
              <IconCard
                title='Easy & fast'
                p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto! Voluptas reprehenderit porro quaerat omnis accusantium tempore aliquam'
                icon={<MdSpeed size={24} />}
              />

              <IconCard
                title='Easy & fast'
                p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto! Voluptas reprehenderit porro quaerat omnis accusantium tempore aliquam'
                icon={<MdSpeed size={24} />}
              />
            </div>
          </div>
        </section>
      </Padding>
    </main>
  )
}
