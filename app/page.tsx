import Image from 'next/image'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'
import Home from '@/components/Home'

export default async function App() {

  return (
    <Home/>
  )
}
