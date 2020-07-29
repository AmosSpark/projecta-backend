const express = require('express');
const projects = require('../models/projects');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the list of the projects');
});

router.post('/', (req, res) => {
    const projects = new projects({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
        res.json({ message: err})
    })
});


module.exports = router;