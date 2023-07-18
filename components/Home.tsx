'use client'
import Image from 'next/image'


export default function Home() {
    return (
        <div className='m-5 h-auto justify-center items-center'>
            <div className='m-2 lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col lg:justify-center items-center gap-x-12 sm:gap-y-4'>
                <div className='py-4 px-3 lg:w-1/3 md:w-2/4 sm:w-3/5 flex flex-col border-gray-800 bg-gray-100 gap-y-3'>
                    <div className='m-4 flex justify-center'>
                        <Image src="/image/icon.png" height={400} width={400} alt='profile' />
                    </div>
                    <div className='font-bold text-xl'>Kazuki Akimoto（秋本 一樹）</div>
                    <div className='flex gap-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        <div className='text-gray-500'>Kagoshima Univ.</div>
                    </div>
                    <div className='text-gray-500 flex flex-row flex-wrap'>
                        鹿児島大学工学部に所属する大学3年生です。プログラミング研究に属しており、主にWeb開発について学習してます。<br />
                        このポートフォリオサイトでは、私のこれまでプロダクト開発やブログ記事の一覧を掲載しています。
                    </div>
                    <div className='flex flex-row gap-x-2 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <div>
                            Kagoshima
                        </div>
                    </div>
                    <div className='pb-2 flex flex-row gap-x-2 text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <div>
                            20182e01a@gmail.com
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex flex-col lg:w-1/3 md:w-2/4 sm:w-3/5 gap-y-5'>
                    <div className='mt-8 font-bold text-4xl'>PORTFOLIO</div>
                    <div className='text-2xl'>
                        Skills
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div className='w-1/2'>
                            <div className='text-xl'>Languages</div>
                            <ul className='space-y-1 text-gray-500'>
                                <li className='flex flex-row gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    Python
                                </li>
                                <li className='flex flex-row gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Java
                                </li>
                                <li className='flex flex-row gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    C/C++
                                </li>
                                <li className='flex flex-row gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Js/Ts
                                </li>
                                <li className='flex flex-row gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    PHP
                                </li>
                                <li className='flex flex-row gap-x-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    C#
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/2'>
                            <div className='text-xl'>Learnig</div>
                            <div className='space-y-1 text-gray-500'>
                                <ul>
                                    <li>
                                        Go lang
                                    </li>
                                    <li>
                                        Rust
                                    </li>
                                    <div className='mt-5 text-gray-500'>
                                        <div className='text-xl text-black'>Framework</div>
                                        <ul>
                                            <li>
                                                Next.js(React.js)
                                            </li>
                                            <li>
                                                Tailwind CSS
                                            </li>
                                            <li>
                                                Bootstrap
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div className='w-1/2 space-y-1 text-gray-500'>
                            <div className='text-xl text-black'>Tools</div>
                            <ul>
                                <li>
                                    GitHub
                                </li>
                                <li>
                                    VS Code
                                </li>
                                <li>
                                    Jupyter Notebook
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/2 space-y-1 text-gray-500'>
                            <div className='text-xl text-black'>BaaS</div>
                            <ul>
                                <li>
                                    Firabase
                                </li>
                                <li>
                                    Supabase
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
