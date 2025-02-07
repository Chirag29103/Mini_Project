import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";


function SideBar({openDash, openExpense, openIncomes, openTransaction, closeDash, closeTransaction, closeExpense, closeIncomes}) {

    const handleTransaction=()=>{
        closeDash();
        closeExpense();
        closeIncomes();
        openTransaction();
        
    }
    const handleDash=()=>{
        closeTransaction();
        closeExpense();
        closeIncomes();
        openDash();
    }
    const handleExpense=()=>{
        closeDash();
        closeTransaction();
        closeIncomes();
        openExpense();
    }
    const handleIncomes=()=>{
        closeDash();
        closeExpense();
        closeTransaction();
        openIncomes();
    }
    
    return (
        <>
            <div className="flex flex-col gap-4 box-border text-white font-semibold col-span-2 bg-gradient-to-b from-slate-500 to-slate-800 rounded-md bg-opacity-95 p-4">
                <a href=""><FaUserCircle className="text-8xl text-orange-400 hover:"/></a>
                <a href="#report" className="hover:bg-slate-400 bg-opacity-10 rounded-md hover:ease-linear duration-150 p-1" onClick={handleDash} id="dash">DashBoard</a>
                <a href="#transactions" className="hover:bg-slate-400 bg-opacity-10 rounded-md hover:ease-linear duration-150 p-1" onClick={handleTransaction}>Transactions</a>
                <a href="#expenses" className="hover:bg-slate-400 bg-opacity-10 rounded-md hover:ease-linear duration-150 p-1" onClick={handleExpense}>Expenses</a>
                <a href="#incomes" className="hover:bg-slate-400 bg-opacity-10 rounded-md hover:ease-linear duration-150 p-1" onClick={handleIncomes}>Incomes</a>
            </div>
        </>
    )
}

export default SideBar