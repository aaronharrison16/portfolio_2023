import './globals.css'
import { Inter } from 'next/font/google'
import { Blobs, Mist, Nav } from './LayoutComponents'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'aaronharrison.dev',
  description: 'TODO Come up with something interesting here',
}

export default function RootLayout({children}: {children: React.ReactNode})
{
  return (
    <html lang="en">
      <body>
        <Mist />
        {/* <Blobs /> */}
        <Nav />
        {children}
      </body>
    </html>
  )
}
