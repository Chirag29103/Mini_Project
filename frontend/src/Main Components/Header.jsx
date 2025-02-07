import React from "react";
import { Link } from "react-router-dom";

function Header({openModal}) {
    return (

        <div className='h-[14vh] w-full box-border sticky top-0 bg-gradient-to-b from-slate-500 via-slate-800 to-black text-white flex justify-between items-center px-6 z-50'>
            <Link to="/"><h1 className="text-4xl">Expense Tracker</h1></Link>
            <div className='flex gap-5 items-center font-semibold'>
                <span className="hover:text-orange-500 hover:scale-125 hover:underline hover:ease-linear duration-300 underline-offset-4">
                    <a href='#home'>Home</a>
                </span>
                <span className="hover:ease-linear duration-300 hover:text-orange-500 hover:scale-125 hover:underline underline-offset-4">
                    <a href="#features">Features</a>
                </span>
                <span className="hover:ease-linear duration-300 hover:text-orange-500 hover:scale-125 hover:underline underline-offset-4">
                    <a href="#about">About</a>
                </span>
                <span className="hover:ease-linear duration-300 hover:text-orange-500 hover:scale-125 hover:underline underline-offset-4">
                    <a href="#contact">Contact</a>
                </span>
                <button onClick={openModal} className="hover:ease-linear duration-300 hover:text-orange-500 hover:scale-125 hover:underline underline-offset-4">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header