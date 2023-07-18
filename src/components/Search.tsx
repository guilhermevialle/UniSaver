'use client'

import { validateVideo } from '@/services/api'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { TbSearch } from 'react-icons/tb'

export default function Search() {
  const [input, setInput] = useState<string>('')
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (input.length > 0) {
      setHasSubmitted(true)
      const validatedLink = await validateVideo(input)

      if (validatedLink?.isValidLink) {
        router.push(`/video/${validatedLink.videoId}`)
        return
      }

      router.push(`/find/${input}`)
    }
  }

  return (
    <form
      className='w-full h-[46px] flex text-neutral-500 border-[1px] border-neutral-800 rounded-md shadow-sm'
      onSubmit={(e) => onSubmit(e)}
    >
      <div className='w-[40px] h-full flex items-center justify-center'>
        <i>
          <TbSearch />
        </i>
      </div>
      <input
        className='bg-transparent outline-none flex-auto text-neutral-200 overflow-hidden placeholder:text-neutral-500 text-sm'
        type='text'
        onChange={(e) => setInput(e.target.value)}
        placeholder='Find something or paste a link URL'
      />
      <div className='w-[40px] h-full flex items-center justify-center'>
        {hasSubmitted && (
          <i className='animate-spin'>
            <ImSpinner2 />
          </i>
        )}
      </div>
    </form>
  )
}
