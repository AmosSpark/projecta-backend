const express = require("express");
const Project = require("../models/projects");
const router = express.Router();

/*
 * /projects
 * GET all projects
 */

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    // response
    res.json({ status: "success", result: projects.length, data: projects });
  } catch (err) {
    console.log(err.message);
  }
});

/*
 *  /projects
 * POST a project
 */

router.post("/", async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId, // provide userId ex: "5f236596a4a02f1e7c8fce09"
    });

    /*
     * OR
     * => const project = await Project.create(req.body);
     * creat and save immediately
     * you wouldn't use .save() again
     * remember to provide userId like above
     */

    // save project
    const project = await newProject.save();
    // response
    res.json({ status: "success", data: project });
  } catch (err) {
    console.log(err.message);
  }
});

/*
 * /projects/:id
 * GET a project
 * ex: projects/5f237080cce2cd2204845fea
 */

router.get("/:projectId", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    // response
    res.json({ status: "success", data: project });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
