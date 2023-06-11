import { FiDownload } from 'react-icons/fi'

type Props = {
  fields: {
    first: string | React.ReactNode
    second: string | React.ReactNode
  }
}

export default function Format({ fields }: Props) {
  const { first, second } = fields

  return (
    <div className='w-full h-[70px] border-[1px] border-neutral-900 rounded-md flex items-center p-3 justify-around text-neutral-400'>
      <div>{first}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <div>{second}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <button>
        <i>
          <FiDownload />
        </i>
      </button>
    </div>
  )
}
