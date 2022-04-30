const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const projects = require('./routes/projects');

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.use('/projects', projects);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));