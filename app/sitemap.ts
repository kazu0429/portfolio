import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURL = process.env.NEXT_PUBLIC_URL || '';
    const lastModified = new Date();

    const sitemap = [
        {
            url: baseURL,
            changeFrequency: "weekly",
            lastModified: lastModified,
            priority: 1,
        },
        {
            url: `${baseURL}/products`,
            lastModified: lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseURL}/contact`,
            lastModified: lastModified,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ]

    return [...sitemap];
}