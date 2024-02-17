const express = require('express');
const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

// const userRoutes = require('./routes/userRoutes');


// Routes
// app.use('/api', userRoutes);
// Add other routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
