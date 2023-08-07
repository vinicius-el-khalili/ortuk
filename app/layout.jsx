import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Iogurte',
  description: 'Much CRUD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen grid grid-rows-[auto_1fr_auto]'>

        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
