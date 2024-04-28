'use server'

import { supabase } from "./supabase"
import RssParser from "rss-parser";

import type { Blog } from "@/types/Type";

interface CustomItem {
    'media:thumbnail': string;
    image: string;
}

export const getProducts = async () => {
    try {
        const { data, error } = await supabase.from("products")
            .select(`*, images(
            name,
            url
        )`)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Supabase error:", error.message);
            throw new Error("Supabase error");
        }

        return data;

    } catch (error) {
        if (error instanceof Error) {
            console.error("Error name:", error.name);
            console.error("Error message:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
    }
}

export const getBlogs = async () => {

    const parser = new RssParser<unknown, CustomItem>({
        customFields: {
          item: [['media:thumbnail', 'image']],
        },
    });

    const rssFeed = {
        zenn: {
            label: 'Zenn',
            url: 'https://zenn.dev/kazu0429/feed?all=1',
            favicon: 'https://zenn.dev/images/logo-transparent.png',
        },
        note: {
            label: 'Note',
            url: 'https://note.com/kazu0429/rss',
            favicon: 'https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico',
        },
    };

    try {
        const jsonFeed: Record<string, Blog[]> = {};
        for (const [site, info] of Object.entries(rssFeed)) {
            // RSSのデータ取得
            const feed = await parser.parseURL(info.url);
            const items = feed.items.map((i) => {
                return {
                    title: i.title ?? "",
                    content: i.content ?? "",
                    url: i.link ?? "",
                    date: i.isoDate ?? "",
                    thumbnail: i.enclosure?.url ?? i.image,
                    favicon: info.favicon ?? "",
                    type:site,
                };
            });
            jsonFeed[site] = items;
        }

        const allBlogs:Blog[] = Object.values(jsonFeed).flatMap(blog => blog);
        return allBlogs

    } catch (error) {
        if (error instanceof Error) {
            console.error("Error name:", error.name);
            console.error("Error message:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
    }

}

export const getThumbnail = async () => {
    const { data, error } = await supabase.from("images").select(`name`);
    if (error) {
        console.log(error);
    }

    return data
}
