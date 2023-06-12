import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UniSaver',
  description:
    'Here you can download thousands of videos and songs from youtube in different formats.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.cdnfonts.com/css/google-sans?styles=20575,20581,20578,20576,20577,20573,20584,20582,20583,20574,20580,20579'
          rel='stylesheet'
        />
      </head>
      <body className={inter.className + ' bg-neutral-950 text-neutral-200'}>
        {children}
      </body>
    </html>
  )
}
