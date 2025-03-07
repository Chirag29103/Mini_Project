import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiMessage3Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Expenses() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    description: "",
  });

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Success notification
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

  // Error notification
  const errorNotify = (message) => {
    toast.error(message, {
      position: "top-left",
      autoClose: 2000,
    });
  };

  // Fetch expenses on component mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data.expenses || []);
    } catch (err) {
      errorNotify("Failed to fetch expenses: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to add expense
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/expenses", {
        ...formData,
        amount: parseFloat(formData.amount)
      });
      setFormData({ title: "", amount: "", date: "", description: "" });
      successNotify("Expense added successfully");
      setExpenses((prev) => [...prev, res.data.expense]); // Add the new expense to the state
    } catch (err) {
      errorNotify("Failed to add expense: " + (err.response?.data?.message || err.message));
    }
  };

  // Handle deleting an expense
  const handleDelete = async (expenseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${expenseId}`);
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense._id !== expenseId));
      successNotify("Expense deleted successfully");
    } catch (err) {
      errorNotify("Failed to delete expense");
    }
  };

  return (
    <div className="h-screen overflow-hidden rounded-xl bg-slate-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-lg shadow-lg">
        Total Expenses: ₹ {expenses.reduce((total, exp) => total + parseFloat(exp.amount || 0), 0).toLocaleString()}
      </h1>

      <div className="grid grid-cols-2 gap-6 h-[calc(100vh-140px)]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-slate-700 p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
          {/* Input fields with better styling */}
          <input
            type="text"
            placeholder="Expense Title"
            className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition-all duration-200"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Expense Amount"
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
            Add Expense
          </button>
        </form>

        {/* Expenses List */}
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
          {expenses.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              <p className="text-xl">No expenses added yet</p>
            </div>
          ) : (
            <div className="overflow-y-auto flex-1 space-y-3 pr-2">
              {expenses.map((expense) => (
                <div
                  key={expense._id}
                  className="bg-slate-600 p-4 rounded-lg hover:bg-slate-500 transition-colors duration-200"
                >
                  <div>
                    <div className="text-2xl">{expense.title}</div>
                    <div className="flex gap-4">
                      <span>₹ {expense.amount}</span>
                      <span>{new Date(expense.date).toLocaleDateString()}</span>
                      {expense.description && (
                        <span className="flex gap-2">
                          <RiMessage3Line className="self-center" />
                          {expense.description}
                        </span>
                      )}
                    </div>
                  </div>
                  <button onClick={() => handleDelete(expense._id)}>
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

export default Expenses;
