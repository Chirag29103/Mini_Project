const User = require("../Models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate data
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide all fields: name, email, password" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    res.status(201).json({ 
      _id: user.id, 
      name: user.name, 
      email: user.email, 
      token: generateToken(user.id) 
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate data
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide both email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({ 
        _id: user.id, 
        name: user.name, 
        email: user.email, 
        token: generateToken(user.id) 
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
