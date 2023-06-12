import Padding from '../layout/Padding'
import { CgMenuRightAlt } from 'react-icons/cg'

export default function Topbar() {
  return (
    <nav className='w-full h-12'>
      <Padding stretch={true}>
        <div className='w-full h-full flex items-center justify-between'>
          <button className='text-3xl'>UniSaver</button>
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
