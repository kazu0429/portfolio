import { supabase } from "./supabase"

export const getProducts = async() => {
    const {data} = await supabase.from("products")
        .select(`*, images(
            name,
            url
        )`).order('created_at',{ascending:false});

    return data;
}