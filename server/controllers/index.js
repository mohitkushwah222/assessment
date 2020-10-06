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
    await Logtime.find({}, (err, list) => {
        if (err) return res.status(404).json({ success: false, error: err });
        if (!list.length) return res.status(404).json({ success: false, error: 'No data found!' });
        var data = [];
        list.forEach(ele => {
            data.push(ele.employee);
        })
        return res.status(200).json({ success: true, data: data });
    }).catch(error => console.log(error));
}

getProjects = async (req, res) => {
    await Logtime.find({}, (err, list) => {
        if (err) return res.status(404).json({ success: false, error: err });
        if (!list.length) return res.status(404).json({ success: false, error: 'No data found!' });
        var data = [];
        list.forEach(ele => {
            data.push(ele.project);
        })
        return res.status(200).json({ success: true, data: data });
    }).catch(error => console.log(error));
}

getLogtime = async (req, res) => {
    await Logtime.find({}, (err, list) => {
        if (err) return res.status(404).json({ success: false, error: err });
        if (!list.length) return res.status(404).json({ success: false, error: 'No data found!' });
        return res.status(200).json({ success: true, data: list });
    }).catch(error => console.log(error));
}

module.exports = {
    createLogtime,
    getEmployees,
    getProjects,
    getLogtime
}