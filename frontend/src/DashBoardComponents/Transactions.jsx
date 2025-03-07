import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiMessage3Line } from "react-icons/ri";
import { FiSearch, FiFilter } from "react-icons/fi";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("date");

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            setLoading(true);
            setError(null);
            const [expensesRes, incomesRes] = await Promise.all([
                axios.get("http://localhost:5000/api/expenses"),
                axios.get("http://localhost:5000/api/incomes")
            ]);

            const expenses = expensesRes.data.expenses.map(exp => ({...exp, type: 'expense'}));
            const incomes = incomesRes.data.incomes.map(inc => ({...inc, type: 'income'}));
            const allTransactions = [...expenses, ...incomes].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            setTransactions(allTransactions);
        } catch (error) {
            console.error("Error fetching transactions:", error);
            setError("Failed to load transactions. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const filteredTransactions = transactions.filter(trans => 
        filter === 'all' ? true : trans.type === filter
    );

    const filteredAndSearchedTransactions = filteredTransactions
        .filter(trans => 
            trans.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trans.description?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === "date") return new Date(b.date) - new Date(a.date);
            if (sortBy === "amount") return b.amount - a.amount;
            return 0;
        });

    const getTransactionStats = () => {
        const total = transactions.reduce((acc, curr) => {
            return curr.type === 'income' 
                ? acc + curr.amount 
                : acc - curr.amount;
        }, 0);

        const incomeTotal = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, curr) => acc + curr.amount, 0);

        const expenseTotal = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, curr) => acc + curr.amount, 0);

        return { total, incomeTotal, expenseTotal };
    };

    const stats = getTransactionStats();

    return (
        <div className="min-h-screen bg-slate-800 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-700 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-gray-500 text-sm">Net Balance</h3>
                        <p className={`text-2xl font-bold ${stats.total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{stats.total.toLocaleString()}
                        </p>
                    </div>
                    <div className="bg-slate-700 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-gray-500 text-sm">Total Income</h3>
                        <p className="text-2xl font-bold text-green-600">₹{stats.incomeTotal.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-700 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-gray-500 text-sm">Total Expenses</h3>
                        <p className="text-2xl font-bold text-red-600">₹{stats.expenseTotal.toLocaleString()}</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-slate-700 rounded-xl shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-96">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search transactions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white"
                            />
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <select 
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white"
                            >
                                <option value="all">All Types</option>
                                <option value="expense">Expenses</option>
                                <option value="income">Income</option>
                            </select>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white"
                            >
                                <option value="date">Sort by Date</option>
                                <option value="amount">Sort by Amount</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Transactions List */}
                <div className="bg-slate-700 rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-white">Transaction History</h2>
                    
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-500 border-t-orange-400"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 p-8 bg-slate-600 rounded-lg">
                            <p className="text-lg font-medium">{error}</p>
                        </div>
                    ) : filteredAndSearchedTransactions.length === 0 ? (
                        <div className="text-center text-gray-300 p-8">
                            <FiFilter className="mx-auto h-12 w-12 mb-4" />
                            <p className="text-lg font-medium">No transactions found</p>
                            <p className="text-sm">Try adjusting your filters or search term</p>
                        </div>
                    ) : (
                        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                            {filteredAndSearchedTransactions.map((transaction) => (
                                <div
                                    key={transaction._id}
                                    className={`p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                                        transaction.type === 'expense'
                                            ? 'bg-slate-600 hover:bg-slate-500'
                                            : 'bg-slate-600 hover:bg-slate-500'
                                    } text-white`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold">{transaction.title}</h3>
                                            <div className="mt-1 space-y-1">
                                                <p className={`text-lg font-medium ${
                                                    transaction.type === 'expense' 
                                                        ? 'text-red-400' 
                                                        : 'text-green-400'
                                                }`}>
                                                    {transaction.type === 'expense' ? '-' : '+'}₹{transaction.amount.toLocaleString()}
                                                </p>
                                                <p className="text-sm text-gray-300">
                                                    {new Date(transaction.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                {transaction.description && (
                                                    <p className="text-sm text-gray-300 flex items-center gap-1">
                                                        <RiMessage3Line className="flex-shrink-0" />
                                                        {transaction.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            transaction.type === 'expense'
                                                ? 'bg-gradient-to-r from-orange-400 to-red-500'
                                                : 'bg-gradient-to-r from-orange-400 to-red-500'
                                        }`}>
                                            {transaction.type === 'expense' ? 'Expense' : 'Income'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Transactions;