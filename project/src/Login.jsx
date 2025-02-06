import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Login({ closeModal }) {
    return (
        <>
            <div className='w-99 h-full bg-white
         to-slate-400 flex flex-col items-center gap-7 fixed inset-0 bg-opacity-40 
         top-[14vh] z-50'>
                <button className='self-end px-6' onClick={closeModal}>
                    <IoMdClose className='text-3xl text-orange-400' />
                </button>
                <h1 className='text-4xl font-semibold text-orange-400 pt-4'>Login</h1>
                <form className='flex flex-col gap-3 bg-gradient-to-b from-slate-700 via-slate-800 to-black text-orange-400 rounded-md 
                shadow-lg w-[50vw] p-10 caret-orange-400'>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="mail">email or username:</label>
                            <input type='email' className='border-2 border-black rounded-md focus:outline-none text-blue-600' required name='mail' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="password">password:</label>
                            <input type='password' className='rounded-md border-2 border-black focus:outline-none' required name='password' />
                        </div>
                        <button className="text-lg font-semibold items bg-orange-400 text-black rounded-xl w-1/5 py-1"
                            type='submit'>Login</button>

                    </div>
                    <div className='justify-between flex'>
                        <Link to='/signUp'>Not Registered Yet?</Link>
                        <Link to='/signUp'>Signup</Link>
                    </div>
                </form>
            </div>


        </>
    );
}

export default Login;