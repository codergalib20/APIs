const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Task Manager')
})


app.listen(5000, () => {
    console.log(`Application running on http://localhost:5000`)
})