'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { ImSpinner2 } from 'react-icons/im'
import { validateVideo } from '@/services/api'

export default function Search() {
  const [input, setInput] = useState<string>('')
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validatedLink = await validateVideo(input)

    if (validatedLink?.isValidLink) {
      setHasSubmitted(true)
      router.push(`/video/${validatedLink.videoId}`)
      return
    }

    if (input.length > 0) {
      setHasSubmitted(true)
      router.push(`/find/${input}`)
    }
  }

  return (
    <form
      className='w-full h-[50px] flex text-neutral-500 border-[1px] border-neutral-800 rounded-md shadow-sm'
      onSubmit={(e) => onSubmit(e)}
    >
      <div className='w-[40px] h-full flex items-center justify-center'>
        <i>
          <TbSearch />
        </i>
      </div>
      <input
        className='bg-transparent outline-none flex-auto text-neutral-200 overflow-hidden placeholder:text-neutral-500'
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
