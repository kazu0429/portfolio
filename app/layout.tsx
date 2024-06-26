import './globals.css'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

import Footer from '@/components/Layout/Footer'
import MotionWrapper from '@/components/Layout/MotionWrapper'
import SupabaseListener from '@/components/supabase-listener'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Kazuportfolio',
  description: 'Generated by create next app',
  verification: { google: 'jE4nLcg9qV_vWtdh4KD3UwFxuqjkUKwrxeEgcgFgnr0', },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description: 'This is a my portfolio created by Nextjs',
    creator: '@kazu0429',
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpeg`,
      alt: 'Portfolio Logo',
    },
  },
  openGraph:{
    images:{
      url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpeg`,
      alt: 'Portfolio Logo',
    }
  }
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
              <div className='h-full'>
                {children}
              </div>
              <Footer />
            </MotionWrapper>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
