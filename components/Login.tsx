'use client'
import React from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Database } from '@/lib/database.types'

const Login = () => {

    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const signin = async (formData: FormData) => {
        const email = String(formData.get('email'))
        const password = String(formData.get('password'))
        try{
            const {data, error} = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if(!error){
                alert("ログイン成功しました")
            }
            router.push('/')
        }catch(err){
            console.log(err)
            return
        }finally{
            router.refresh();
        }
    }

    return (
        <main className="flex items-center bg-white py-6 sm:py-8 lg:py-12 h-screen">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Sign In!</h2>
                <form action={signin} className="mx-auto max-w-lg rounded-lg border">
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                            <input type="text" name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                            <input type="password" name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                        <div>
                            <button type="submit" className="w-full mb-2 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 p-4">
                        <p className="text-center text-sm text-gray-500">Only administrators can login. <Link as="/" href="/signup" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Home</Link></p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login