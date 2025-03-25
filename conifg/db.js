const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI||'mongodb+srv://atindraghosh2017:tVAlnUAyDimd9KAZ@cluster0.jq9j5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;