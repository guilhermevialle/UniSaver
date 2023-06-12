import Footer from '@/components/Footer'
import Search from '@/components/Search'
import VideoCard from '@/components/cards/Video'
import Padding from '@/components/layout/Padding'
import Topbar from '@/components/nav/Topbar'
import TopbarSpace from '@/components/nav/TopbarSpace'
import { Video } from '@/types'
import { v4 } from 'uuid'

type Props = {
  results: Video[] | undefined
  query: string
}

export default function Find({ results, query }: Props) {
  return (
    <main className='w-screen h-fit'>
      <Topbar />
      <TopbarSpace />
      <Padding stretch={true}>
        <div className='my-6 space-y-6'>
          <Search />
          <h1 className='text-xl'>{query}</h1>
        </div>

        <div className='w-full flex flex-col justify-center items-center gap-4 sm:flex-row sm:flex-wrap'>
          {results?.map((details) => {
            return (
              <div
                key={v4()}
                className='w-full sm:w-[48%] lg:w-[32%] 2xl:w-[22%] h- [280px] '
              >
                <VideoCard details={details} />
              </div>
            )
          })}
        </div>
      </Padding>
      <Footer />
    </main>
  )
}
