'use client'

import { DropdownOption } from '@/types'
import { useEffect, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { v4 as uuid } from 'uuid'

type Props = {
  buttonSize?: string
  buttonTitle: string | React.ReactNode
  sectionTitle: string
  sectionSize?: string
  options: DropdownOption[]
}

export default function Dropdown({
  buttonTitle,
  sectionTitle,
  buttonSize,
  sectionSize,
  options,
}: Props) {
  const [isSectionOpened, setDropdownSection] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdownSection()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  function closeDropdownSection() {
    setDropdownSection(false)
  }

  return (
    <div
      ref={dropdownRef}
      className={`${
        buttonSize ? buttonSize : 'w-40 '
      } h-fit relative flex text-sm`}
    >
      <button
        className='bg-neutral-900 flex-auto flex text-left border-[1px] border-neutral-800 hover:border-neutral-700 focus:border-neutral-600 p-2 px-3 rounded items-center justify-between shadow-sm text-sm'
        onClick={() => setDropdownSection((prev) => !prev)}
      >
        <span className='font-medium text-[13px]'>{buttonTitle}</span>
        <div className='w-[1px] h-[50%] bg-neutral-600'></div>
        <i className={`transition-all ${isSectionOpened ? 'rotate-180' : ''}`}>
          <BiChevronDown size={20} />
        </i>
      </button>

      {isSectionOpened && (
        <div
          className={`${
            sectionSize ? sectionSize : 'w-56 '
          } absolute top-[120%] right-0 bg-neutral-900 py-3 rounded border-[1px] z-20 border-neutral-800 shadow-sm`}
        >
          <h1 className='font-semibold mb-3.5 px-4 text-sm text-neutral-200 text-[12px]'>
            {sectionTitle}
          </h1>

          <div className='flex flex-col items-start'>
            {options.map((option) => {
              return (
                <button
                  key={uuid()}
                  onClick={() => {
                    closeDropdownSection()
                    option.clickFn && option.clickFn()
                  }}
                  className='w-full h-9 text-left text-neutral-400 hover:bg-neutral-800 px-4 focus:bg-neutral-700 text-[11px]'
                >
                  {option.text}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
