import React, { useState } from "react";

function Expenses() {

    const [incomes, setIncomes] = useState([]);
    return (
        <>

            <div className="col-span-6 p-4 pt-0 flex flex-col gap-4">
                <h1 className="text-4xl p-4 bg-slate-600 text-orange-400 text-center rounded-lg">Total Expenses:</h1>
                <div className="flex gap-4">
                    <form className="flex flex-col w-1/2 gap-5 caret-orange-400 text-blue-600" method="POST">
                        <input type='text' placeholder="Expense Title" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='title'></input>
                        <input type='number' placeholder="Expense Amount" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='amount'></input>
                        <input type='date' placeholder="Enter A Date" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='date'></input>
                        <textarea placeholder="Add a Reference" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='description'>
                        </textarea>
                        <button className="text-lg font-semibold bg-purple-500 rounded-xl w-3/5 py-1 
                     hover:shadow-emerald-500 shadow-md text-black"
                            type="submit">Add Income</button>
                    </form>
                    {incomes.length == 0 && <div className="flex text-red-600 w-full justify-center items-center text-2xl font-semibold">
                        No Expenses Added Yet</div>}
                </div>
            </div>
        </>
    )
}

export default Expenses;