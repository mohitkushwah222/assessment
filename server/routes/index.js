const express = require('express');

const controller = require('../controllers');

const router = express.Router();

router.get('/list', controller.getTaskList);
router.post('/add', controller.addTask);

module.exports = router;