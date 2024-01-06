'use server'
import { supabase } from "./supabase"

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
        const { data, error } = await supabase.from("blogs").select();

        if (error) {
            console.error("Supabase error:", error.message);
            throw new Error("Supabase error");
        }

        console.log(data);

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

export const getThumbnail = async () => {
    const { data, error } = await supabase.from("images").select(`name`);
    if (error) {
        console.log(error);
    }

    return data
}
