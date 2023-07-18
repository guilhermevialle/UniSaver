'use client'

import { useMediaQuery } from 'react-responsive'
import { twMerge } from 'tailwind-merge'

interface PaddingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  stretch?: boolean
  paddingY?: string
}

export default function Padding({
  children,
  stretch,
  paddingY,
  ...rest
}: PaddingProps) {
  const isBigScreen = useMediaQuery({ minWidth: 1536 })

  const { className } = rest

  const stretchedPadding =
    `w-full h-full px-4 md:px-8 lg:px-32 xl:px-52 2xl:px-64 3xl:px-72` +
    paddingY

  return (
    <div
      {...rest}
      className={twMerge(
        className,
        stretch && !isBigScreen
          ? stretchedPadding
          : 'w-full h-full px-4 sm:20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96' +
              paddingY
      )}
    >
      {children}
    </div>
  )
}
