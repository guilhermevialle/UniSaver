import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  const { className } = rest

  return (
    <button
      {...rest}
      className={twMerge(
        'flex items-center px-3 py-2 gap-x-2.5 bg-neutral-900 rounded-xl text-sm text-neutral-300 border-[1px] border-neutral-800 hover:border-neutral-600 hover:brightness-110 transition-all',
        className
      )}
    >
      {children}
    </button>
  )
}
