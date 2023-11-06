const express = require("express");
const router = express.Router();
const { Signup, Login, GetUser } = require("../task/userFunctions");

// api to post data from signup form
router.post("/register", Signup);

//api to post data from login form
router.post("/login", Login);

//api to get user data
router.get("/user/:id", GetUser);

// healthcheck
router.get("/", function (req, res, next) {
  res.send({ status: 200, msg: "OK" });
});

module.exports = router;
