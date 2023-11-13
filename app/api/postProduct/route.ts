import { supabase } from "@/lib/supabase";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    console.log("post data", body);

    const { data, error } = await supabase
        .from("products")
        .insert(body);

    if (error) {
        console.log(error);
    }
    try {
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ data: err, success: false });
    }
}