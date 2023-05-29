const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {

    },
    { timestamps: true }
)


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;