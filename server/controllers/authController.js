import User from "../models/User.js"; // Assuming you have a User model
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (req, res) => {
  console.log('JWT_SECRET:', process.env.JWT_SECRET); // Log the JWT_SECRET for debugging

  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ success: false, message: "User not found." });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ success: false, message: "Invalid credentials." });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    success: true,
    message: "Login successful.",
    user: { id: user._id, name: user.name, email: user.email },
    token,
  });
}

export { loginController };
