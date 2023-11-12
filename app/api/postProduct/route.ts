import { supabase } from "@/lib/supabase";
import { NextResponse, NextRequest } from "next/server";
import { getProducts } from "@/lib/supabaseFunction";

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    console.log("post data", body );

    const getProductsData = await getProducts();

    const { data, error } = await supabase
        .from("products")
        .insert({
            id: getProductsData?.length, ...body
        });

    if (error) {
        console.log(error);
    }
    try {
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ data: err, success: false });
    }
}