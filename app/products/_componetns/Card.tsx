import { Product } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";

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
        <div key={id} className="pt-4 bg-zinc-100 rounded-lg flex flex-col items-center dark:bg-zinc-800">
            <Link href={url} className="group relative overflow-hidden w-5/6 rounded-lg my-2">
                <Image src={images.url} alt={images.name} className="h-5/6 w-full object-cover object-center transition duration-200 group-hover:scale-110" width={200} height={200} loading="lazy" />
            </Link>
            <div className="w-5/6 flex flex-1 flex-col py-4 flex-wrap">
                <h2 className="mb-2 text-lg font-semibold ">
                    <a href={url} target='_brank' className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{title}</a>
                </h2>
                <p className="">{description}</p>
                <div className="mt-auto flex items-end justify-between">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <span className="block pt-2 text-sm text-gray-400">{formatData(updated_at)}</span>
                        </div>
                    </div>
                    {/* <span className="rounded border px-2 py-1 text-sm text-gray-500">{tag}</span> */}
                </div>
            </div>
        </div>
    )
}

export default Card;