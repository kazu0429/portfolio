'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {Session, createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'
import { useRouter } from 'next/navigation'


const Header = ({session}:{session:Session  | null}) => {


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter()

    const Menus = [
        { name: "Home", to: "/" },
        { name: "Products", to: "/products" },
        { name: "Blogs", to: "/blogs" },
        { name: "Contact", to: "/contact" },
    ]

    const logOut = async () => {
        const supabase  = createClientComponentClient<Database>()

        try{
            const { error } = await supabase.auth.signOut()
            alert("ログアウトしました")
            router.push('/')
        }catch(err){
            console.log(err)
        }finally{
            router.refresh()
        }
    }



    return (
        <div className='border-b'>
            <nav className='border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <Link href="/" className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-8 h-8  hover:text-indigo-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black  hover:text-indigo-500">Portfolio</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                    {session ? (
                        <button onClick={logOut} className="px-2 py-1 text-black font-medium text-sm rounded  hover:text-white hover:bg-indigo-500 hover:berder-gray-600">Log out</button>
                    ):(
                        <Link href='/signin' className="px-2 py-1 text-black font-medium text-sm rounded  hover:text-white hover:bg-indigo-500 hover:berder-gray-600">Log in</Link>
                    )}
                    
                        <button onClick={() => setIsOpen(!isOpen)} type="button" data-collapse-toggle="mobile-menu-2" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-white dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`justify-between items-center w-full ${!isOpen && "hidden"} lg:flex lg:w-auto lg:order-1 shadow-black`} id="mobile-menu-2">
                        <ul className={`flex flex-col lg:flex-row lg:space-x-8 sm:mt-0 shadow-black mt-4 font-medium`}>
                            {Menus.map((menu, i) => (
                                <li key={i}>
                                    <Link href={menu.to} className="block py-2 pr-4 pl-3 hover:text-indigo-500 border-100 lg:border-0 lg:p-0">{menu.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header