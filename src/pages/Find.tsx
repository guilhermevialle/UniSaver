import Footer from '@/components/Footer'
import Search from '@/components/Search'
import VideoCard from '@/components/cards/Video'
import Padding from '@/components/layout/Padding'
import { Video } from '@/types'
import { v4 } from 'uuid'

type Props = {
  results: Video[] | undefined
  query: string
}

export default function Find({ results, query }: Props) {
  return (
    <main className='w-screen h-fit'>
      <Padding stretch={true}>
        <div className='my-6 space-y-6'>
          <Search />
          <h1 className='text-xl'>{query}</h1>
        </div>

        <div className='w-full flex flex-col justify-center items-center gap-4'>
          {results?.map((details) => {
            return <VideoCard key={v4()} details={details} />
          })}
        </div>
      </Padding>
      <Footer />
    </main>
  )
}
