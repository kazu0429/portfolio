'use client'

import { useState, useRef } from "react";

type Props = {
    isModal:boolean,
    onClose:() => void,
}

const ProductPostField = ({isModal, onClose}:Props) => {

    const [ samune, setSamune] = useState<number>(0);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [outlineLenght, setOutlineLenght] = useState<number>(0);

    if(!isModal) return null;

    const postProduct = async(formData: FormData) => {
        if(!samune){
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
                    title:formData.get("name"),
                    image_num:Number(samune),
                    url:formData.get("url"),
                    description:formData.get("outline"),
                }),
            });
            if(response.status === 200){
                const resData = await response.json();
                alert("投稿完了");
                onClose;
            }else{
                console.log("送信失敗");
            }
        }catch(err){
            console.log(err);
        }
    }

    const handleChangeTextarea = () => {
        const value = textAreaRef.current?.value ? textAreaRef.current.value : "";
        setOutlineLenght(value.length);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-500/50 p-4">
            <div className="relative p-4">
                <div className="relative rounded-lg px-6 py-4 bg-white shadow">
                    <form action={postProduct} className="mt-2">
                    <div className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-black">New Product</p>
                        <div>
                            <label htmlFor="name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Name</label>
                            <input type="text" name="name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                        <div>
                            <label htmlFor="samune" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Thumbnail</label>
                            <select id="samune" className="border rounded-md p-2 block w-full" onChange={(e) => setSamune(Number(e.target.value))}>
                                <option value={0}>Choose a Product Thumbnail</option>
                                <option value={1}>online</option>
                                <option value={2}>innovative</option>
                                <option value={3}>male</option>
                                <option value={4}>science</option>
                                <option value={5}>video_game</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="url" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Image</label>
                            <input type="text" name="url" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                        </div>
                        <div>
                            <label htmlFor="outline" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Outline</label>
                            <textarea name="outline" onChange={handleChangeTextarea} ref={ textAreaRef } rows={4} className="resize-none w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required />
                            <p className={`text-black ${outlineLenght > 50 && "text-red-900"}`}>letter : <span>{outlineLenght}</span> / 50 </p>
                        </div>
                    </div>
                        <div className="m-5 flex flex-row justify-around">
                            <button type="submit" className="button border-b-2 rounded-md p-2 text-black hover:border-indigo-400 hover:text-indigo-400">POST</button>
                            <button onClick={onClose} className="button border-t-2 p-2 text-black hover:border-indigo-400 hover:text-indigo-400">CLOSE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductPostField