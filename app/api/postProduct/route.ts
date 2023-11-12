import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const body = await request.json();
    console.log(body);

    try {
        return NextResponse.json(body);
    } catch (err) {
        return NextResponse.json({ data: err, success: false });
    }
}