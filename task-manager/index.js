const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const errorHandlerMiddleware = require('./middlewares/error-handler');
require('dotenv').config();

// middleware
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome to Task Manager')
})

// resources
app.use('/api/v1/tasks', require('./resources/tasks/task.route')); // task router
app.use(errorHandlerMiddleware)
const start = async () => {
    try {

        await connectDB();
        app.listen(5000, () => console.log(`Application running on http://localhost:5000`))
    } catch (err) {
        console.error({ err });
    }
}

start();