import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Report from "./Report";
import Transactions from "./Transactions";
import Expenses from "./Expenses";
import Incomes from "./IncomesPage";


function DashBoard() {
    const [dash, setDash] = useState(true);
    const openDash = () => {
        setDash(true);
    };

    const closeDash = () => {
        setDash(false);
    };

    const [incomes, setIncomes] = useState(false);
    const openIncomes = () => {
        setIncomes(true);
    };

    const closeIncomes = () => {
        setIncomes(false);
    };
    const [transaction, setTransaction] = useState(false);
    const openTransaction = () => {
        setTransaction(true);
    };

    const closeTransaction = () => {
        setTransaction(false);
    };
    const [expense, setExpense] = useState(false);
    const openExpense = () => {
        setExpense(true);
    };

    const closeExpense = () => {
        setExpense(false);
    };
    return (
        <div className="grid grid-cols-8 box-border h-screen gap-4 p-5 bg-gradient-to-b from-slate-700 to-black">
            <SideBar 
            closeDash={closeDash} openDash={openDash}
            openTransaction={openTransaction} closeTransaction={closeTransaction}
            openExpense={openExpense} closeExpense={closeExpense}
            openIncomes={openIncomes} closeIncomes={closeIncomes}>
            </SideBar>
            {dash && <Report/>}
            {transaction && <Transactions/>}
            {expense && <Expenses/>}
            {incomes && <Incomes/>}
        </div>
    )
}

export default DashBoard