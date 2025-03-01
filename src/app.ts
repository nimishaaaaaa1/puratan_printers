import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './api/routes/authRoutes';
import userRoutes from './api/routes/userRoutes';
import fileRoutes from './api/routes/fileRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/files', fileRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/puratan-printers')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

export default app; 