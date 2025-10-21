PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=      
DB_NAME=birthday_db

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import wishesRouter from './routes/wishes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/wishes', wishesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
