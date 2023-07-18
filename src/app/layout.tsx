import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Youtube Catcher',
  description:
    'Download your favorite music or videos from youtube via link or video name and export in different quality formats.',
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
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='../../public/youtube_catcher_logos/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='../../public/youtube_catcher_logos/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='../../public/youtube_catcher_logos/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='../../public/youtube_catcher_logos/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='../../public/youtube_catcher_logos/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='../../public/youtube_catcher_logos/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='../../public/youtube_catcher_logos/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='../../public/youtube_catcher_logos/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../../public/youtube_catcher_logos/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='../../public/youtube_catcher_logos/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='../../public/youtube_catcher_logos/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='../../public/youtube_catcher_logos/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='../../public/youtube_catcher_logos/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={poppins.className + ' bg-neutral-950 text-neutral-200'}>
        {children}
      </body>
    </html>
  )
}
