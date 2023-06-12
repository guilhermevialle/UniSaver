'use client'

import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
  stretch?: boolean
  paddingY?: string
}

export default function Padding({ children, stretch, paddingY }: Props) {
  const isBigScreen = useMediaQuery({ minWidth: 1536 })

  const stretchedPadding =
    `w-full h-full px-4 md:px-8 lg:px-32 xl:px-52 2xl:px-64 3xl:px-72` +
    paddingY

  return (
    <div
      className={
        stretch && !isBigScreen
          ? stretchedPadding
          : 'w-full h-full px-4 sm:20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96' +
            paddingY
      }
    >
      {children}
    </div>
  )
}
