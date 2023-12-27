'use client';

import React from "react";
import { motion,Variants } from "framer-motion"
import { useState } from "react";

interface LanguageProps {
    name: string;
    level: number;
}

interface itemMotionProps {
    children: React.ReactNode;
    initPos: number;
    i: number;
}

const Language = ({ name, level }: LanguageProps) => {

    let svgD: string = "";
    let optionColor: string = "";

    switch (level) {
        case 3:
            optionColor = "text-yellow-500";
            svgD = "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z";
            break;
        case 2:
            svgD = "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
            break;
        case 1:
            svgD = "M4.5 12.75l6 6 9-13.5";
            break;
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${optionColor}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d={svgD} />
            </svg>
            {name}
        </>

    )
}

const itemVariants = (initPos: number, i: number): Variants => {
    const defaultDuration = 0.5;
    const itemDurationSpan = 0.15;

    return {
        offscreen: { // 画面外の場合のスタイル
            x: initPos,
            opacity: 0,
        },
        onscreen: { // 画面内の場合のスタイル
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: i * itemDurationSpan + defaultDuration,
                ease: "easeOut"
            },
        }
    }
}

const ItemMotion = ({ children, initPos, i }: itemMotionProps) => {

    const [isDragging, setIsDragging] = useState(false);

    return (
        <motion.li
            key={i}
            variants={itemVariants(initPos, i)}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: true, amount: 0 }}
        >
            <motion.div
                drag
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                dragElastic={0.5}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                whileHover={{ scale: 1.15 }}
                className={`flex flex-row gap-x-2 w-fit relative`}>
          {children}
        {isDragging && (
          <div className=" absolute -top-1 left-0 w-full h-full py-4 ring-2 rounded-2xl ring-gray-300" />
        )}
            </motion.div>
        </motion.li>
    )
}

const Skills = () => {

    const languages: LanguageProps[] = [
        { name: "Python", level: 3 },
        { name: "Js/Ts", level: 3 },
        { name: "Java", level: 2 },
        { name: "C/C++", level: 2 },
        { name: "PHP", level: 2 },
        { name: "C#", level: 1 },
        { name: "Dart", level: 1 }
    ]
    const tools = ["GitHub", "VS Code", "Jupyter Notebook", "Emacs"];
    const learning = ["Go lang", "Rust", "Bun(ElysiaJS)"];
    const frameWorks = ["Next.js(React.js)", "Vue.js", "Tailwind CSS", "Bootstrap"];
    const baas = ["Firebase", "Supabase"];

    return (
        <motion.div
            variants={{
                offscreen: { // 画面外の場合のスタイル
                    y: 300,
                    opacity: 0,
                },
                onscreen: { // 画面内の場合のスタイル
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.3,
                        duration: 0.7,
                        ease: "easeOut"
                    },
                }
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className="mt-6 flex flex-col lg:w-1/3 md:w-2/4 sm:w-3/5 gap-y-5"
        >
            <div className='mt-8 font-bold text-4xl'>PORTFOLIO</div>
            <div className='text-2xl font-bold'>
                <div>Skills</div>
            </div>
            <div className='flex flex-row justify-start'>
                <div
                    className='w-1/2'>
                    <div className='text-xl font-medium'>Languages</div>
                    <ul
                        className='space-y-1'>
                        {languages.map((item, i) => (
                            <div key={i}>
                                <ItemMotion initPos={-80} i={i}>
                                    <Language name={item.name} level={item.level} />
                                </ItemMotion>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='w-1/2'>
                    <div className='text-xl font-medium'>Learnig</div>
                    <div className='space-y-1'>
                        <ul>
                            {learning.map((content, i) => (
                                <div key={i}>
                                    <ItemMotion initPos={100} i={i}>{content}</ItemMotion>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <div className='text-xl'>Framework</div>
                        <ul>
                            {frameWorks.map((frameWork, i) => (
                                <div key={i}>
                                    <ItemMotion initPos={100} i={i}>{frameWork}</ItemMotion>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-start'>
                <div className='w-1/2 space-y-1'>
                    <div className='text-xl font-medium'>Tools</div>
                    <ul>
                        {tools.map((tool, i) => (
                            <div key={i}>
                                <ItemMotion initPos={-100} i={i}>{tool}</ItemMotion>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='w-1/2 space-y-1'>
                    <div className='text-xl font-medium'>BaaS</div>
                    <ul>
                        {baas.map((content, i) => (
                            <div key={i}>
                                <ItemMotion initPos={100} i={i}>{content}</ItemMotion>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills