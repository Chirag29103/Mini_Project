import React from "react";

function Contact() {
    return (
        <>
            <div className="w-full box-border p-6 flex flex-col items-center justify-center scroll-mt-[14vh]" id='contact'>
                <h2 className="text-4xl font-semibold pb-10">Contact Us</h2>
                <form className="flex flex-col items-center gap-5 text-orange-400 aspect-square" method="POST" >
                    <div className="flex flex-col gap-2">
                        <label className="text-xl"
                        htmlFor="name">Name</label>
                        <input className="border-blue-900 border-2 rounded-md w-[35vw] focus:outline-none" 
                        type="text" name="name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="email">Email</label>
                        <input className="border-blue-900 border-2 rounded-md w-[35vw] focus:outline-none"
                        type="email" name="email" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="message">Message</label>
                        <textarea className="border-black border-2 rounded-md w-[35vw] focus:outline-none"
                        name="message"></textarea>
                    </div>
                    <button className="text-lg font-semibold bg-purple-500 rounded-xl w-3/5 py-1 
                     hover:shadow-emerald-500 shadow-md text-black"
                    type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact