import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
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

export async function PATCH(request: NextRequest) {
    const body = await request.json();

    // console.log("edit data", body);

    const { error } = await supabase.from("products").update(body).eq("id", body.id)

    if (error) {
        console.log(error);
    }
    revalidatePath("/products");

    try {
        return NextResponse.json(body);
    } catch (err) {
        return NextResponse.json({ data: err, success: false });
    }

}