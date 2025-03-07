const express = require("express");
const router = express.Router();
const { getIncomes, addIncome , deleteIncome} = require("../Controllers/incomeController");

router.get("/", getIncomes);
router.post("/", addIncome);
router.delete("/:id", deleteIncome);

module.exports = router;
