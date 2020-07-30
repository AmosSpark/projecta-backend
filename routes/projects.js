const express = require('express');
const Project = require('../models/projects');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.json({ message: error });
    }
});


// Submit a project
router.post('/', (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description
    });

  project.save()
    .then(data => {
      res.json(data);
    }) 
    .catch(err => {
      res.json({ message: err });
    });

});

// Specific project
router.get('/:projectId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    res.json(project)
  } catch(err) {
    res.json({ message: err });
  }
});


module.exports = router;