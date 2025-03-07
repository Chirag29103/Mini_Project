import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiMessage3Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Incomes() {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
        description: "",
    });

    const [incomes, setIncomes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Toast Notifications
    const successNotify = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "bg-emerald-300 text-white shadow-md rounded-lg",
            progressClassName: "bg-green-700",
        });
    };

    const errorNotify = (message) => {
        toast.error(message, {
            position: "top-left",
            autoClose: 2000,
        });
    };

    // Fetch incomes on component mount
    useEffect(() => {
        fetchIncomes();
    }, []);

    const fetchIncomes = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:5000/api/incomes");
            setIncomes(res.data.incomes || []);
        } catch (err) {
            errorNotify("Failed to fetch incomes: " + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission to add income
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/incomes", {
                ...formData,
                amount: parseFloat(formData.amount)
            });
            setFormData({ title: "", amount: "", date: "", description: "" });
            successNotify("Income added successfully");
            setIncomes((prev) => [...prev, res.data.income]); // Add the new income to the state
        } catch (err) {
            errorNotify("Failed to add income: " + (err.response?.data?.message || err.message));
        }
    };

    // Handle deleting an income
    const handleDelete = async (incomeId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/incomes/${incomeId}`);
            if (response.data.success) {
                setIncomes((prevIncomes) => prevIncomes.filter((income) => income._id !== incomeId));
                successNotify("Income deleted successfully");
            } else {
                errorNotify(response.data.error || "Failed to delete income");
            }
        } catch (err) {
            errorNotify("An error occurred while deleting income");
        }
    };

    return (
        <div className="h-screen overflow-hidden rounded-xl bg-slate-800 text-white p-6">
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-lg shadow-lg">
                Total Income: ₹ {incomes.reduce((total, inc) => total + parseFloat(inc.amount || 0), 0).toLocaleString()}
            </h1>

            <div className="grid grid-cols-2 gap-6 h-[calc(100vh-140px)]">
                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-slate-700 p-6 rounded-lg shadow-lg space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Add New Income</h2>
                    <input
                        type="text"
                        placeholder="Income Title"
                        className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Income Amount"
                        className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        placeholder="Enter A Date"
                        className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        placeholder="Add a Reference"
                        className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg font-semibold
                            hover:from-orange-500 hover:to-red-600 transform hover:scale-105 transition-all duration-200"
                    >
                        Add Income
                    </button>
                </form>

                {/* Incomes List */}
                <div className="bg-slate-700 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <h2 className="text-xl font-semibold mb-4">Recent Incomes</h2>
                    {incomes.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center text-slate-400">
                            <p className="text-xl">No incomes added yet</p>
                        </div>
                    ) : (
                        <div className="overflow-y-auto flex-1 space-y-3 pr-2">
                            {incomes.map((income) => (
                                <div
                                    key={income._id}
                                    className="bg-slate-600 p-4 rounded-lg hover:bg-slate-500 transition-colors duration-200"
                                >
                                    <div>
                                        <div className="text-2xl">{income.title}</div>
                                        <div className="flex gap-4">
                                            <span>₹ {income.amount}</span>
                                            <span>{new Date(income.date).toLocaleDateString()}</span>
                                            {income.description && (
                                                <span className="flex gap-2">
                                                    <RiMessage3Line className="self-center" />
                                                    {income.description}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete(income._id)}>
                                        <MdDelete className="text-3xl self-center hover:shadow-emerald-500 shadow-md rounded-full" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Incomes;
