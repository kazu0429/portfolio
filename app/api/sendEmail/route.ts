import { NextResponse, NextRequest } from "next/server";
import sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/mail'


export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body.message);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

    const msgToManager:MailDataRequired  = {
        to: "k.shouhi0412@i.softbank.jp",
        from: body.email,
        subject: body.subject,
        text:`${body.name}さんからのお問い合わせ`,
        html: `${body.message}`,
    };

    try {
        // await sgMail.send(msgToManager);
        return NextResponse.json(msgToManager);
    } catch (err) {
        return NextResponse.json({ data: err, success: false });
    }
}