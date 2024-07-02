import ContactOptions from './Components/ContactOptions'
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
      <body suppressHydrationWarning={true}>
        <Blobs />
        {children}
        <Nav />

        <div className='hidden md:block' style={{position: 'fixed', bottom: '32px', right: '32px', width: '32px'}}>
          <ContactOptions />
        </div>
      </body>
    </html>
  )
}
