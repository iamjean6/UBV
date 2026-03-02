import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { getPrograms, getOneProgram, createProgram, updateProgram, deleteProgram } from './controller/programController.js';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Test Route
app.get('/', (req, res) => {
    res.send('Server is up and running');
});

// Routes
app.get('/api/programs', getPrograms);
app.get('/api/programs/:id', getOneProgram);
app.post('/api/programs', createProgram);
app.put('/api/programs/:id', updateProgram);
app.delete('/api/programs/:id', deleteProgram);



// Database Connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });
