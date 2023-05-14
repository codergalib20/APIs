const express = require('express');
const connectDB = require('./db/connect');
const app = express();
require('dotenv').config();

// middleware
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome to Task Manager')
})

// routers
app.use('/api/v1/tasks', require('./routes/tasks/tasks.route')); // task router
// console.log(connectDB());
const start = async () => {
    try {

        await connectDB();
        app.listen(5000, () => console.log(`Application running on http://localhost:5000`))
    } catch (err) {
        console.error({err});
    }
}

start();