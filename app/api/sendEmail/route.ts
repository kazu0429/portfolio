import { NextResponse, NextRequest } from "next/server";
import sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/mail'


export async function POST(request: NextRequest) {
    const body = await request.json();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

    const msgToManager:MailDataRequired  = {
        to: process.env.EMALE_ADDRESS!,
        from: body.email,
        subject: body.subject,
        text:`${body.lastName}さんからのお問い合わせ`,
        html: `
            <strong>${body.lastName}さんからの問い合わせです</strong>
            <p>氏名 : ${body.lastName} ${body.firstName}</p>
            <p>所属 : ${body.company}</p>
            <p>お問い合わせ内容:<br>${body.message}</p>`,
    };

    try {
        await sgMail.send(msgToManager);
        return NextResponse.json(msgToManager);
    } catch (err) {
        return NextResponse.json({ data: err, success: false });
    }
}