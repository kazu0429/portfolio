'use server'
import { supabase } from "./supabase"

export const getProducts = async() => {
    const {data, error} = await supabase.from("products")
        .select(`*, images(
            name,
            url
        )`);
    console.log(data);
    return data;
}

export const getThumbnail = async() => {
    const {data, error} = await supabase.from("images").select(`name`);

    return data
}
