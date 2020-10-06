const Logtime = require('../models');


createLogtime = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide logtime details'
        })
    }

    const task = new Logtime(body);

    if (!task) {
        return res.status(400).json({ success: false, error: err })
    }

    task.save().then(() => {
        return res.status(201).json({
            success: true,
            id: task.id,
            message: 'logtime added!'
        })
    })
        .catch(err => {
            return res.status(400).json({
                err,
                message: 'logtime not added!'
            })
        })
}

getEmployees = async (req, res) => {
    const list = [{ id: 1, name: 'em1' }, { id: 1, name: 'emp2' }]
    // await Logtime.find({}, (err, list) => {
    //     if (err) return res.status(404).json({ success: false, error: err });
    //     if (!list.length) return res.status(404).json({ success: false, error: 'No tasks found!' });
    // }).catch(error => console.log(error));
    return res.status(200).json({ success: true, data: list });
}

getProjects = async (req, res) => {
    const list = [{ id: 1, name: 'pro1', totalEstimate: 10 }, { id: 1, name: 'pro1', totalEstimate: 10 }];
    // await Logtime.find({}, (err, list) => {
    //     if (err) return res.status(404).json({ success: false, error: err });
    //     if (!list.length) return res.status(404).json({ success: false, error: 'No tasks found!' });
    //     return res.status(200).json({ success: true, data: list });
    // }).catch(error => console.log(error));
    return res.status(200).json({ success: true, data: list });
}

module.exports = {
    createLogtime,
    getEmployees,
    getProjects
}