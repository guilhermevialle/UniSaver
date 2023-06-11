import Find from '@/pages/Find'
import { findManyVideos } from '@/services/api'

type Props = {
  params: {
    query: string
  }
}

export default async function ServerFind({ params }: Props) {
  const { query } = params
  const results = await findManyVideos(decodeURIComponent(query))

  return <Find results={results} query={decodeURIComponent(query)} />
}
