const express = require('express');
const { createATask, deleteATask, getATasks, getAllTasks, updateATask } = require('./task.controller');
const router = express.Router();

router.route('/').get(getAllTasks).post(createATask);
router.route('/:id').get(getATasks).patch(updateATask).delete(deleteATask);




module.exports = router;