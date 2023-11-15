import { Product } from "@/types/product";
import Image from "next/image";

const Card = (props:Product) => {
    const { 
        id, 
        title,
        images,
        url,
        description,
        updated_at,
        tag
    } = props;

    const formatData = (date: Date) => {
        const formattedDate = new Date(date).toLocaleDateString('en-US');
        return formattedDate
    }

    return (
        <div key={id} className="flex flex-col items-center overflow-hidden rounded-lg border bg-white">
            <a href="#" className="group relative block overflow-hidden bg-gray-100 w-56 h-48">
                <Image src={images.url} alt={images.name} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" width={100} height={100} loading="lazy" />
            </a>
            <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-4 flex-wrap">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    <a href={url} target='_brank' className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{title}</a>
                </h2>
                <p className="text-gray-500">{description}</p>
                <div className="mt-auto flex items-end justify-between">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <span className="block py-1 text-sm text-gray-400">{formatData(updated_at)}</span>
                        </div>
                    </div>
                    <span className="rounded border px-2 py-1 text-sm text-gray-500">{tag}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;