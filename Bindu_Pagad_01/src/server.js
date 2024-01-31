
import express from 'express';
import healthRoutes from './routes/healthRoute.js';

const restapi = express();
const PORT = process.env.PORT || 8080;

restapi.use(express.json());
restapi.use(healthRoutes);

restapi.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

