import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Login({ closeModal }) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/login", formData);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <>
            <div className='w-full h-full bg-white flex flex-col items-center gap-7 fixed inset-0 bg-opacity-40 top-[14vh] z-50'>
                <button className='self-end px-6' onClick={closeModal}>
                    <IoMdClose className='text-3xl text-orange-400' />
                </button>
                <h1 className='text-4xl font-semibold text-orange-400 pt-4'>Login</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-between bg-gradient-to-b from-slate-700 via-slate-800 to-black text-orange-400 rounded-md shadow-lg w-1/2 h-1/2 p-10'>
                    <input type='email' name='email' placeholder='Email' className='h-1/6 p-1 border-2 border-black rounded-md focus:outline-none text-rose-500' required onChange={handleChange} />
                    <input type='password' name='password' placeholder='Password' className='h-1/6 p-1 border-2 border-black rounded-md focus:outline-none' required onChange={handleChange} />
                    <button type='submit' className='self-center text-lg font-semibold bg-orange-400 text-black rounded-xl w-1/5 py-1'>Login</button>
                    {error && <p className='text-red-500 self-center'>{error}</p>}
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
