import './globals.css'
import Footer from '@/components/Footer'
import SupabaseListener from '@/components/supabase-listener'

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
            {/* @ts-ignore */}
            <SupabaseListener />
            <div>
              {children}
            </div>
            <Footer />
        </div>
      </body>
    </html>
  )
}
