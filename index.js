require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');


const app = express();
const port = process.env.PORT||8000;

//middleware
app.use(express.json());
app.use(cors());

//mongodb connection
connectDB();

app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

//error handling middleware
app.use(require("./middleware/errorMiddleware"));

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));