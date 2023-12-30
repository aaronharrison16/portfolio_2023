import './globals.css'
import { Blobs,  Nav } from './LayoutComponents'

export const metadata = {
  title: 'aaronharrison.dev',
  description: 'TODO Come up with something interesting here',
}

export default function RootLayout({children}: {children: React.ReactNode})
{
  return (
    <html lang="en">
      <body>
        {/* <Blobs /> */}
        {children}
        <Nav />
      </body>
    </html>
  )
}
