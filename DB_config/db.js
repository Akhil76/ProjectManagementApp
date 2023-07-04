const mongoose = require('mongoose');

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database is connected`);
}


module.exports = connectDB;