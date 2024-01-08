'use client'

import { Product } from "@/types/Type";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Card = (props: Product) => {
    const { theme, setTheme } = useTheme();

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
                <div className="mt-3">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-2">
                        {tag.split(",").map((name, i) => (
                            <div key={i}>
                                <Image src={`https://skillicons.dev/icons?i=${name}&theme=${theme}`} alt={tag} width={40} height={40} />
                            </div>
                        ))}
                        </div>
                        <div className="h-10">
                            <span className="block pt-2 text-sm text-gray-400">{formatData(updated_at)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;