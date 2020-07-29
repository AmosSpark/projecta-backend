const express = require('express');
const projects = require('../models/projects');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the list of the projects');
});

router.post('/', (req, res) => {
    console.log(req.body);
});


module.exports = router;