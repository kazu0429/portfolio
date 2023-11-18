import './globals.css'
import Footer from '@/components/Footer'
import MotionWrapper from '@/components/MotionWrapper'
import SupabaseListener from '@/components/supabase-listener'
import { Providers } from './providers'

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
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen w-screen">
        <Providers>
          <div className='flex flex-col justufy-between'>
            {/* @ts-ignore */}
            <MotionWrapper>
              <SupabaseListener />
                  {children}
              <Footer />
            </MotionWrapper>
          </div>
        </Providers>
      </body>
    </html>
  )
}
