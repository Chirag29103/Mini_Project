import React, { useState } from "react";
import Features from "../HomeComponents/Features";
import About from "../HomeComponents/About";
import Contact from "../HomeComponents/Contact";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Login from "../User/Login";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {isModalOpen && <Login closeModal={closeModal} />}
            
            <div className={`${isModalOpen ? "bg-opacity-50" : ""} bg-gradient-to-b from-slate-700 via-slate-800 to-black text-white`}>
                <Header openModal={openModal}></Header>


                <div className="w-full h-[86vh] flex flex-col items-center justify-center  gap-10 p-6 
            bg-[url('https://static.vecteezy.com/system/resources/previews/041/335/190/non_2x/financial-business-statistics-with-bar-graph-and-candlestick-chart-show-stock-market-price-on-dark-background-vector.jpg')]
            bg-cover box-border scroll-mt-[14vh]" id='home'>

                    <h1 className="text-4xl font-bold text-yellow-200 text-center">
                        Master Your Finances With Precision
                    </h1>
                    <p className="font-semibold text-yellow-200 text-center">
                        Experience the power of intelligent expense tracking and budget management with ExpenseTracker.
                    </p>
                    <Link to='/signUp'><button className="text-white bg-orange-400 rounded-full px-4 py-2 
                animate-[pulse_3s_ease-in_infinite] hover:bg-green-500 hover:-translate-y-1 ease-in duration-200
                hover:animate-none">
                        Start Your Financial Journey
                    </button>
                    </Link>

                </div>
                <Features></Features>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home