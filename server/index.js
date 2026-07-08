import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoute.js';
import dietRoutes from './routes/dietRoute.js';

import dotenv from 'dotenv'; // Load environment variables
dotenv.config(); // Configure dotenv

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/diet', dietRoutes);

// Start the server
console.log('JWT_SECRET:', process.env.JWT_SECRET); // Log the JWT_SECRET for debugging
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
