const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//middleware
app.use(express.json());
app.use(cors());

//mongodb connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://atindraghosh2017:tVAlnUAyDimd9KAZ@cluster0.jq9j5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=>console.log('connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

//sample route
app.get('/', (req, res)=>{
    res.send('Welcome to my Portfolio Backend api');
});


//set up a portfolio route


// app.get('/api/projects', (req, res) => {
//     // Return a list of projects (this is static for now)
//     res.json([
//       { id: 1, name: 'Project 1', description: 'This is project 1' },
//       { id: 2, name: 'Project 2', description: 'This is project 2' },
//     ]);
//   });

//start the server
const port = process.env.PORT||8000;
app.listen(port, ()=> console.log(`server running on port ${port}`));