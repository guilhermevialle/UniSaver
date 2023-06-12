import Padding from './layout/Padding'

export default function Footer() {
  return (
    <footer className='w-full h-12 flex items-center mt-6'>
      <Padding stretch={true}>
        <h1 className='text-sm font-medium text-neutral-500'>
          © 2023 UniSaver™. All Rights Reserved.
        </h1>
      </Padding>
    </footer>
  )
}
