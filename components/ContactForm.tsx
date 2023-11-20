'use client'

import { useRef } from "react"

const ContactForm = () => {

    const ref = useRef<HTMLFormElement>(null)

    const sendEmail = async (formData:FormData) => {
        const msg = formData.get("message") as string;
        const htmlMsg = msg.split("\n").join("<br>");
        try{
            const response = await fetch('/api/sendEmail', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    firstName:formData.get("firstName"),
                    lastName:formData.get("lastName"),
                    email:formData.get("email"),
                    company:formData.get("company"),
                    subject:formData.get("subject"),
                    message:htmlMsg,
                }),
            });
            if(response.status === 200){
                const resData = await response.json();
                alert("お問い合わせありがとうございます！");
            }else{
                console.log("送信失敗");
            }
        }catch(err){
            console.log(err);
        }finally{
            ref.current?.reset();
        }
    }

    return (
        <div className="flex py-6 sm:p-8  lg:p-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <div className="mb-4 h-12 flex items-center border-l-2 pl-4">
                        <h2 className="text-left text-4xl font-bold lg:text-3xl">Contact</h2>
                    </div>
                    <p className="mx-auto max-w-screen-md text-left text-gray-500 dark:text-white">私へのお問い合わせはこちらからお願いいたします。</p>
                </div>

                <form action={sendEmail} ref={ref} className="mx-auto grid max-w-screen-md gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="input_item">First name<span className="text-indigo-500">*</span></label>
                        <input name="firstName" className="input_field" />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="input_item">Last name<span className="text-indigo-500">*</span></label>
                        <input name="lastName" className="input_field" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="input_item">Company or School</label>
                        <input name="company" className="input_field" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="input_item">Email<span className="text-indigo-500">*</span></label>
                        <input name="email" className="input_field" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="input_item">Subject<span className="text-indigo-500">*</span></label>
                        <input name="subject" className="input_field" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="input_item">Message<span className="text-indigo-500">*</span></label>
                        <textarea name="message" className="input_field  h-64 whitespace-pre-wrap"></textarea>
                    </div>

                    <div className="flex items-center justify-between sm:col-span-2">
                        <button type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                        <span className="text-sm"><span className="text-indigo-500">*</span>Required</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;