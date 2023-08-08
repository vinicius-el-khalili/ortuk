import './globals.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

export const metadata = {
  title: 'Iogurte',
  description: 'Much CRUD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen grid grid-rows-[1fr_auto]'>

        <Navbar/>
        <div>
          {children}
        </div>
        <Footer/>
        
      </body>
    </html>
  )
}
