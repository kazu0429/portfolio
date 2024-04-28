'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Introduction = () => {
    const [isHovered, setIsHovered] = useState(false);

    const PenSvg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-none w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
        )
    }

    const AcademicSvg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="w-4 h-4 text-indigo-500 dark:text-gray-300">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
        )
    }

    return (
        <div className="scroll-content h-[600px] sm:h-[630px] md:h-[640px] lg:h-[650px] xl:h-[660px] overflow-y-scroll overscroll-y-auto">
            <div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        delay: 0.7,
                        type: "spring",
                        stiffness: 260,
                        damping: 15
                    }}
                >
                    <div className='m-4 flex justify-center'>
                        <Image src="/image/icon.png" height={400} width={400} alt='profile' className="rounded-2xl" />
                    </div>
                </motion.div>
                <div className='font-bold text-xl'>Kazuki Akimoto（秋本 一樹）</div>
                <div className='flex gap-x-4 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <span>Kagoshima University</span>
                </div>
                <div className='flex flex-row flex-wrap'>
                    鹿児島大学工学部に所属する大学4年生です。プログラミング研究会に属しており、主にWeb開発、フロントエンドについて学習してます。<br />
                    このポートフォリオサイトでは、私のこれまでプロダクト開発やブログ記事の一覧を掲載しています。
                </div>
            </div>
            <div>
                <h2 className="mt-4 mb-4 text-2xl font-bold">Social Media</h2>
                <div className="flex items-center gap-x-2">
                    <div>
                        <a href="https://twitter.com/Akazu0429" target="_blank" className="text-blue-400 dark:hover:text-white transition duration-100 hover:text-indigo-500 active:text-gray-600">
                            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/kazu0429" target="_blank" className="text-black dark:text-white dark:hover:text-zinc-400 transition duration-100 hover:text-indigo-500 active:text-gray-600">
                            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/kazu__a041/" target="_blank" className=" dark:text-gray-400 dark:hover:text-white hover:text-indigo-500 active:text-gray-600">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#7c3aed" />
                                        <stop offset="50%" stopColor="#d946ef" />
                                        <stop offset="100%" stopColor="#fcd34d" />
                                    </linearGradient>
                                </defs>
                                <path fill={!isHovered ? "url(#grad1)" : "currentColor"} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/Akazu0429" target="_blank" className="text-red-500 dark:hover:text-zinc-100 transition duration-100 hover:text-indigo-500 active:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                            <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mt-4 mb-4 text-2xl font-bold">Educational</h2>
                <ol className="ml-5 relative border-s border-gray-400 dark:border-gray-600">
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-indigo-200 dark:ring-gray-900 dark:bg-indigo-800">
                            <AcademicSvg />
                        </span>
                        <time className="text-sm mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">2017/4 - 2020/3</time>
                        <p className="font-bold">小倉商業高校</p>
                        <p className="text-sm">ビジネス情報学科</p>
                        <div className="mt-1 flex items-baseline gap-x-2 text-gray-500 dark:text-gray-300">
                            <PenSvg />
                            <p>簿記/プログラミング(Java)/ネットワーク</p>
                        </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-indigo-200 dark:ring-gray-900 dark:bg-indigo-800">
                            <AcademicSvg />
                        </span>
                        <time className="text-sm mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">2020/4 - 2022/3</time>
                        <p className="font-bold">福岡工業大学短期大学部</p>
                        <p className="text-sm">情報工学コース</p>
                        <div className="mt-1 flex flex-row justify-center items-baseline gap-x-2 text-gray-500 dark:text-gray-300">
                            <PenSvg />
                            <p>プログラミング(C・Java・PHP・Python)/ネットワーク・サーバー/NLP</p>
                        </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-indigo-200 dark:ring-gray-900 dark:bg-indigo-800">
                            <AcademicSvg />
                        </span>
                        <time className="text-sm mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">2022/4 ~ 現在</time>
                        <p className="font-bold">鹿児島大学</p>
                        <p className="text-sm">工学部 先進工学科 情報・生体工学PG</p>
                        <div className="mt-1 flex items-start gap-x-2 text-gray-500 dark:text-gray-300">
                            <PenSvg />
                            <p>画像処理/機械学習/最適化/ネットワーク/</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Introduction;