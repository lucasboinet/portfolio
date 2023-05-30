import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';

import projects from './routes/projects.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.use('/projects', projects);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

export default app;