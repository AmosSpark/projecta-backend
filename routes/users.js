const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is the list of users");
});

router.post("/", (req, res) => {
  const user = new User({
    fullname: console.log(req.body),
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
