import express from 'express';
import cors from 'cors';
import hangmanRoutes from './api/hangman.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/hangman', hangmanRoutes);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;