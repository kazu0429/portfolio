'use server'
import { supabase } from "./supabase"
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'

export const getProducts = async() => {
    const {data} = await supabase.from("products")
        .select(`*, images(
            name,
            url
        )`);
    return data;
}
