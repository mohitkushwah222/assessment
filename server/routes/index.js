const express = require('express');

const controller = require('../controllers');

const router = express.Router();

router.get('/getProjects', controller.getProjects);
router.get('/getEmployees', controller.getEmployees);
router.post('/createLogtime', controller.createLogtime);

module.exports = router;