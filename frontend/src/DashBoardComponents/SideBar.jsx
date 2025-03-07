import React from "react";
import { FaUserCircle, FaDashcube, FaExchangeAlt, FaWallet, FaPiggyBank } from "react-icons/fa";

function SideBar({ activeSection, onSectionChange }) {
    const navItems = [
        { id: 'dash', label: 'Dashboard', icon: FaDashcube },
        { id: 'transactions', label: 'Transactions', icon: FaExchangeAlt },
        { id: 'expense', label: 'Expenses', icon: FaWallet },
        { id: 'incomes', label: 'Incomes', icon: FaPiggyBank }
    ];

    return (
        <div className="col-span-2 bg-gradient-to-b from-slate-700 to-slate-900 rounded-xl shadow-lg p-6 flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 pb-6 border-b border-slate-600">
                <FaUserCircle className="text-6xl text-orange-400 transition-transform hover:scale-110" />
                <span className="text-white font-medium">Welcome Back!</span>
            </div>

            <nav className="flex flex-col gap-2">
                {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => onSectionChange(id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                            ${activeSection === id 
                                ? 'bg-orange-400 text-slate-900 shadow-md' 
                                : 'text-white hover:bg-slate-700'}`}
                    >
                        <Icon className="text-xl" />
                        <span className="font-medium">{label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default SideBar;