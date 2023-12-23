'use client'

import Skills from './Skills'
import Introduction from './Introduction'

export default function Home() {
    return (
        <div className='h-full m-5'>
            <div className='m-2 flex-col lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-center items-center gap-x-12 sm:gap-y-6'>
                <div className='py-4 px-3 lg:w-1/3 md:w-2/4 sm:w-3/5 flex bg-gray-100 dark:bg-zinc-800 gap-y-3'>
                    <Introduction />
                </div>
                    <Skills />
            </div>
        </div>
    )
}
