const express = require('express');
const connectDB = require('./db/connect');
const app = express();

// middleware
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome to Task Manager')
})

// routers
app.use('/api/v1/tasks', require('./routes/tasks/tasks.route')); // task router

app.listen(5000, () => console.log(`Application running on http://localhost:5000`))