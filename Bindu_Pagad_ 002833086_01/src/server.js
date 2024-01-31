const express = require('express');
const healthRoutes = require('./routes/healthRoute');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(healthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

