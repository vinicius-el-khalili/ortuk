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
      <body className='h-screen'>

        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
