// const express = require('express');
// const healthRoutes = require('./routes/healthRoute');
import express from 'express';
import healthRoutes from './routes/healthRoute.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(healthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

