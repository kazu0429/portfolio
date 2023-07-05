import { supabase } from "./supabase"

export const getProducts = async() => {
    const products = await supabase.from("products")
        .select(`*, images(
            name,
            url
        )`);
    return products.data;
}