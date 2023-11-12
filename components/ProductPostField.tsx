'use client'

import { useState } from "react";

type Props = {
    isModal:boolean,
    onClose:() => void,
}

const ProductPostField = ({isModal, onClose}:Props) => {

    const [ samune, setSamune] = useState<string>("0");
    if(!isModal) return null;

    const postProduct = async(formData: FormData) => {
        console.log(samune)
        if(samune == "0"){
            alert("サムネイルを選択してください。");
            return;
        }
        try{
            const response = await fetch('/api/postProduct', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    name:formData.get("name"),
                    samune:samune,
                    url:formData.get("url"),
                    outline:formData.get("outline"),
                }),
            });
            if(response.status === 200){
                const resData = await response.json();
                alert("投稿完了");
            }else{
                console.log("送信失敗");
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-500/50 p-4">
            <div className="relative p-4">
                <div className="relative rounded-lg p-4 bg-white shadow">
                    <h1 className="text-lg font-bold">New Product</h1>
                    <form action={postProduct} className="mt-2">
                    <div className="flex flex-col gap-4 p-4">
                        <div>
                            <label htmlFor="name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Name</label>
                            <input type="text" name="name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                        <div>
                            <label htmlFor="samune" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Thumbnail</label>
                            <select id="samune" className="border border-gray-300 rounded-md p-2 block w-full" onChange={(e) => setSamune(e.target.value)}>
                                <option value="0">Choose a Product Thumbnail</option>
                                <option value="1">online</option>
                                <option value="2">innovative</option>
                                <option value="3">male</option>
                                <option value="4">science</option>
                                <option value="5">video_game</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="url" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Image</label>
                            <input type="text" name="url" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                        <div>
                            <label htmlFor="outline" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Outline</label>
                            <textarea name="outline" rows={4} className="resize-none w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                    </div>
                        <div className="m-5 flex flex-row justify-around">
                            <button type="submit" className="button border-b-2 rounded-md p-2 hover:border-indigo-400 hover:text-indigo-400">POST</button>
                            <button className="button border-t-2 p-2 hover:border-indigo-400 hover:text-indigo-400" onClick={onClose}>CLOSE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductPostField