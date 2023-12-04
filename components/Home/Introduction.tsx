import { motion } from "framer-motion"
import Image from "next/image"

const Introduction = () => {
    return (
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
                    <Image src="/image/icon.png" height={400} width={400} alt='profile' className='rounded-lg' />
                </div>
            </motion.div>
            <div className='font-bold text-xl'>Kazuki Akimoto（秋本 一樹）</div>
            <div className='flex gap-x-4 my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <div className=''>Kagoshima Univ.</div>
            </div>
            <div className='flex flex-row flex-wrap'>
                鹿児島大学工学部に所属する大学3年生です。プログラミング研究に属しており、主にWeb開発、フロントエンドについて学習してます。<br />
                バックエンドについても今後学習を進める予定です。<br />
                このポートフォリオサイトでは、私のこれまでプロダクト開発やブログ記事の一覧を掲載しています。
            </div>
            <div className='flex flex-row gap-x-2 my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <div>
                    Kagoshima
                </div>
            </div>
            <div className='pb-2 flex flex-row gap-x-2 my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                    20182e01a@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Introduction