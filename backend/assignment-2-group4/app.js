import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import liquorRoutes from './routes/liquorRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/liquors', liquorRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server error. Please try again later.' });
});

// Start event listener
import './eventListener.js';

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});