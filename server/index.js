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
mongoose.connect('mongodb://localhost:27017/gym-master', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/diet', dietRoutes);

// Start the server
console.log('JWT_SECRET:', process.env.JWT_SECRET); // Log the JWT_SECRET for debugging
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
