const Task = require("./task.model");
const asyncWrapper = require('../../utils/asyncWrapper');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(201).json({
        data: tasks,
        message: "Tasks loaded"
    })
});
const createATask = async (req, res) => {
    const data = await Task.create(req.body);
    res.status(201).json({ message: "Task added", data });
};
const getATasks = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    if (!task) {
        return res.status(404).json({ message: `Task not found of ${id}` });
    }
    res.status(201).json({ task })
};
const updateATask = asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!task) {
        return res.status(404).json({ message: `Task not found of ${id}` });
    };
});
const deleteATask = asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
        return res.status(404).json({ message: `Task not found of ${id}` });
    };
    res.status(201).json({ message: `Task deleted ${id}`, id });

});


module.exports = {
    getAllTasks,
    createATask,
    getATasks,
    updateATask,
    deleteATask
}