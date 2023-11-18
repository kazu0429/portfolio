'use client'
const ContactForm = () => {

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
        }
    }

    return (
        <div className="flex py-6 sm:p-8  lg:p-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <div className="mb-4 h-12 flex items-center border-l-2 border-black pl-4">
                        <h2 className="text-left text-4xl font-bold lg:text-3xl">Contact</h2>
                    </div>
                    <p className="mx-auto max-w-screen-md text-left text-gray-500 dark:text-white">私へのお問い合わせはこちらからお願いいたします。</p>
                </div>

                <form action={sendEmail} className="mx-auto grid max-w-screen-md gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name<span className="text-indigo-500">*</span></label>
                        <input name="firstName" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name<span className="text-indigo-500">*</span></label>
                        <input name="lastName" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Company or School</label>
                        <input name="company" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email<span className="text-indigo-500">*</span></label>
                        <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject<span className="text-indigo-500">*</span></label>
                        <input name="subject" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message<span className="text-indigo-500">*</span></label>
                        <textarea name="message" className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring whitespace-pre-wrap"></textarea>
                    </div>

                    <div className="flex items-center justify-between sm:col-span-2">
                        <button type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                        <span className="text-sm text-gray-500"><span className="text-indigo-500">*</span>Required</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;