import React from "react";

function About() {

    return (
        <>
            <div className="box-border text-center min-h-[86vh] w-full p-6 h-[50vh] scroll-mt-[14vh] " id='about'>
                <h1 className="text-4xl pb-4 font-semibold">About ExpenseTracker</h1>
                <p className="text-lg">ExpenseTracker is a sophisticated financial management solution designed for individuals and businesses seeking to optimize their financial health. Our platform combines cutting-edge technology with user-friendly interfaces to provide a comprehensive tool for expense tracking, budget planning, and financial analysis. With ExpenseTracker, you're empowered to make informed decisions and achieve your financial goals with confidence.
                </p>
                <div className="flex gap-4 pt-4 justify-evenly">
                    <img src="/Screenshot 2025-02-06 232803.png" alt="Visuals" className="w-[45%] rounded-lg">
                    </img>
                    <img src="/Screenshot 2025-02-06 232819.png" alt="Visuals" className="w-[45%] rounded-lg">
                    </img>
                </div>
            </div>
        </>
    )
}

export default About