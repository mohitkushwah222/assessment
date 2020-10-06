const Task = require('../models');


addTask = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide task details'
        })
    }

    const task = new Task(body);

    if (!task) {
        return res.status(400).json({ success: false, error: err })
    }

    task.save().then(() => {
        return res.status(201).json({
            success: true,
            id: task.id,
            message: 'Task added!'
        })
    })
        .catch(err => {
            return res.status(400).json({
                err,
                message: 'Task not added!'
            })
        })
}

getTaskList = async (req, res) => {
    await Task.find({}, (err, list) => {
        if (err) return res.status(404).json({ success: false, error: err });
        if (!list.length) return res.status(404).json({ success: false, error: 'No tasks found!' });
        return res.status(200).json({ success: true, data: list });
    }).catch(error => console.log(error));
}

module.exports = {
    addTask,
    getTaskList
}