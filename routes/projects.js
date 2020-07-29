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

      console.log(post);
      new Post(post)
        .save()
        .then((data) => {
          res.json(data);
          console.log(data);
        })
        .catch((err) => {
          res.json({ message: err });
        });
});


module.exports = router;