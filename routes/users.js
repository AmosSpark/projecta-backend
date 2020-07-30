const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is the list of users");
});

router.post("/", (req, res) => {
  const user = new User({
    fullname: console.log(req.body.fullname),
    username: console.log(req.body.username),
    phonenumber: console.log(req.body.phonenumber),
    password: console.log(req.body.password),
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
