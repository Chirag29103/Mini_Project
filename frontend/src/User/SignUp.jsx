import React, { useState } from 'react';  // Add missing imports
import axios from 'axios';  // Add axios import
import Footer from '../MainComponents/Footer';  // Add Footer import
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Password validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            //console.log(res.data);
            alert("Signup Successful");
            // Clear form after successful submission
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
            setError("");  // Clear any previous error
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <>
            <div className='w-full h-screen bg-gradient-to-b from-slate-500 to-slate-900 bg-opacity-40 flex flex-col items-center gap-10'>
                <h1 className='text-4xl text-orange-400 pt-4'>SignUp</h1>
                
                {error && <p className='text-red-500'>{error}</p>}
                
                <form onSubmit={handleSubmit} className='flex flex-col flex-grow gap-5 rounded-md bg-gradient-to-b from-slate-700 via-slate-800 to-black text-orange-400 shadow-lg w-1/2 p-10 justify-center items-center'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Full Name'
                        className='rounded-md focus:outline-none text-rose-500 p-1'
                        value={formData.name}
                        required
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='rounded-md focus:outline-none text-rose-500 p-1'
                        value={formData.email}
                        required
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='rounded-md focus:outline-none text-rose-500 p-1'
                        value={formData.password}
                        required
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        className='rounded-md focus:outline-none text-rose-500 p-1'
                        value={formData.confirmPassword}
                        required
                        onChange={handleChange}
                    />
                    <button type='submit' className='text-lg text-white bg-orange-400 rounded-md w-1/4 pt-0.5 pb-1'>Sign Up</button>
                </form>
            <Footer />
            </div>
        </>
    );
}
