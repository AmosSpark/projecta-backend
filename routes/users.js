const express = require("express");
const User = require("../models/Users");
const router = express.Router();

/*
 * /users
 * GET all user
 */

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    // response
    res.json({ status: "success", result: users.length, data: users });
  } catch (err) {
    console.log(err.message);
  }
});

/*
 * /users/:id
 * GET a user
 * ex: users/5f236596a4a02f1e7c8fce09
 */

router.get("/:id", async (req, res) => {
  try {
    // find user by id
    const user = await User.findById(req.params.id);
    // response
    res.json({ status: "success", data: user });
  } catch (err) {
    console.log(err.message);
  }
});

/*
 *  /users
 * POST a user
 */

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body); // create new user and save
    // response
    res.status(201).json({ status: "success", data: user });
  } catch (err) {
    console.log(err.message);
  }
});

/*
 * /users/:id
 * PATCH/UPDATE a user
 * ex: users/5f236596a4a02f1e7c8fce09
 */

router.patch("/:id", async (req, res) => {
  try {
    // find user by id and update
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // response
    res.json({ status: "success", data: user });
  } catch (err) {
    console.log(err.message);
  }
});

/*
 * /users/:id
 * DELETE a user
 * ex: users/5f236596a4a02f1e7c8fce09
 */

router.delete("/:id", async (req, res) => {
  try {
    // find user by id and update
    const user = await User.findByIdAndDelete(req.params.id);
    // response
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
