const Task = require("./task.model");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(201).json({
            data: tasks,
            message: "Tasks loaded"
        })
    }
    catch (err) {
        res.status(404).json({ err })
    }
};
const createATask = (req, res) => {
    try {
        const data = Task.create(req.body);
        res.status(201).json({ message: "Task added", data });
    }
    catch (err) {
        res.status(404).json({ message: "Server error", err })
    }
};
const getATasks = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).json({ message: `Task not found of ${id}` });
        }
        res.status(201).json({ task })
    }
    catch (err) { res.status(404).json({ message: "Server error", err }) }
};
const updateATask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true });
    }
    catch (err) { res.status(404).json({ message: "Server error", err }) }
};
const deleteATask = (req, res) => {
    try {
        const id = req.params.id;
    }
    catch (err) { res.status(404).json({ message: "Server error", err }) }
};


module.exports = {
    getAllTasks,
    createATask,
    getATasks,
    updateATask,
    deleteATask
}