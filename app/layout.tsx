import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-white text-black">
        <div className='flex flex-col justufy-between'>
          <Header/>
            <div>
              {children}
            </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
