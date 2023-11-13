import { supabase } from "@/lib/supabase";
import { NextResponse, NextRequest } from "next/server";
import { getProducts } from "@/lib/supabaseFunction";

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    const getProductsData = await getProducts();
    
    console.log("post data", {id: getProductsData?.length, ...body} );

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