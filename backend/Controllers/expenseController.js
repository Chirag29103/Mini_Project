const Expense = require("../Models/expenseModel");

// Get all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json({ success: true, expenses });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Add expense without linking it to income title
const addExpense = async (req, res) => {
    const { title, amount, date, description } = req.body;

    try {
        // Save the expense
        const expense = new Expense({ title, amount, date, description });
        await expense.save();

        res.status(201).json({ success: true, message: "Expense added successfully", expense });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to add expense" });
    }
};

// Delete expense
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(id);

        if (!deletedExpense) {
            return res.status(404).json({ success: false, error: "Expense not found" });
        }

        res.status(200).json({ success: true, message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
};

module.exports = { getExpenses, addExpense, deleteExpense };