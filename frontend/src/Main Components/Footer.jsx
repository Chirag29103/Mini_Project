import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full h-[14.5vh] box-border bg-gradient-to-b from-black via-slate-800 to-slate-500 text-white">
            <div className="flex justify-between pt-2 items-center px-6">
                <div className="flex flex-col items-center">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.lbvtBQRFV0twQqyF8xhq3QHaHa&pid=Api&P=0&h=180" 
                    alt="ExpenseTracker Logo" className="w-1/5 rounded-2xl"/>
                    <span className="logo-text">ExpenseTracker</span>
                </div>
                <div className="flex gap-5 ">
                    <a href=""><FaLinkedin className="text-2xl text-orange-400 hover:ring-2
                     ring-emerald-200 ring-offset-1 ring-offset-slate-50
                      dark:ring-offset-slate-900 rounded-lg" /></a>
                    <a href=""><FaTwitter className="text-2xl text-orange-400 hover:ring-2
                     ring-emerald-200 ring-offset-1 ring-offset-slate-50
                      dark:ring-offset-slate-900 rounded-lg" /></a>
                    <a href=""><FaFacebook className="text-2xl text-orange-400 hover:ring-2
                     ring-emerald-200 ring-offset-1 ring-offset-slate-50
                      dark:ring-offset-slate-900 rounded-lg" /></a>
                    <a href=""><FaInstagram className="text-2xl text-orange-400 hover:ring-2
                     ring-emerald-200 ring-offset-1 ring-offset-slate-50
                      dark:ring-offset-slate-900 rounded-lg" /></a>
                </div>
            </div>
            <div className="text-center">
                <p>&copy; 2025 ExpenseTracker. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;