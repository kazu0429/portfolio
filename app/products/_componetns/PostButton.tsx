'use client'

import PostField from "./PostField";
import { useState } from "react";

const PostButton = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="flex justify-center">
            <button onClick={() => setIsOpen(!isOpen)} className="hover:text-indigo-500 hover:border-indigo-500 transition duration-300 hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <div>
                <>
                    {isOpen && <PostField isModal={isOpen} onClose={() => setIsOpen(false)} isEdit={false} />}
                </>
            </div>
        </div>
    )
}

export default PostButton;