const Income = require("../Models/incomeModel");

// Get all incomes
const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.status(200).json({ success: true, incomes }); // Ensure incomes is always an array
    } catch (error) {
        res.status(500).json({ success: false, incomes: [], error: "Server error" });
    }
};


// Add a new income
const addIncome = async (req, res) => {
    const { title, amount, date, description } = req.body;

    try {
        const income = new Income({ title, amount, date, description });
        await income.save();

        res.status(201).json({ success: true, message: "Income added successfully", income });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to add income" });
    }
};
const deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedIncome = await Income.findByIdAndDelete(id);

        if (!deletedIncome) {
            return res.status(404).json({ success: false, error: "Income not found" });
        }

        res.status(200).json({ success: true, message: "Income deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
};

module.exports = { getIncomes, addIncome , deleteIncome};
