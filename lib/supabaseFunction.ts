'use server'

import { supabase } from "./supabase"
import RssParser from "rss-parser";

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
    try {
        const parser = new RssParser();

        const xmlText = await fetch(`https://zenn.dev/kazu0429/feed?all=1`, {
            next: { revalidate: 60 * 60 * 24 },
        }).then((res) => res.text());

        const feed = await parser.parseString(xmlText);
        console.log(feed.items[0]);

        const items =  feed.items.map((item) => ({
            type: "zenn",
            title: item.title ?? "",
            createdAt: item.pubDate
            ? new Date(item.pubDate).toISOString()
            : new Date().toISOString(),
            url: item.link ?? "",
            thumbnail: item.enclosure?.url ?? "",
        }));

        return items

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
