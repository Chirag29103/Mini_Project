const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./Routes/AuthRouter");
const incomeRoutes=require("./Routes/incomeRoutes");
const expenseRoutes = require("./Routes/expenseRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Make sure this line is there to parse JSON

// CORS
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/incomes", incomeRoutes); 
app.use("/api/expenses", expenseRoutes); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
