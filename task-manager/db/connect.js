const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect('mongodb://localhost:27017/learningdb');
}

module.exports = connectDB;