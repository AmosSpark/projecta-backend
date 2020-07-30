const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is the list of users");
});

router.post("/", (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    phonenumber: req.body.phonenumber,
    password: req.body.password,
  });

  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
