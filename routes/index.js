var express = require("express");
var router = express.Router();
var axios = require("axios");
var config = require("../common/config")

/* GET home page. */
router.get("/", function (req, res) {

  res.clearCookie("token")

  res.render("screens/index", {
    title: "Login Page"
  });

});

router.get("/logout", function (req, res) {

  res.clearCookie("token")

  res.redirect("/")

});

router.post("/login", function (req, res) {

  axios.post(config.application.API_URL + "login", {
      username: req.body.username,
      password: req.body.password
    })
    .then(function (response) {

      res.cookie("token", response.data.access_token)
      res.send({
        isAuthenticate: true
      })

    })
    .catch(function (error) {

      res.send({
        isAuthenticate: false
      })

    });

});

router.post("/createAccount", function (req, res) {

  console.log(config.application.API_URL)

  axios.post(config.application.API_URL + "createAccount", {
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.firstname,
      email: req.body.email,
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      birthday: req.body.birthday,
      universityId: req.body.universityId
    })
    .then(function (response) {
      res.send({
        isSuccess: true
      })
    })
    .catch(function (error) {
      res.send({
        isSuccess: false
      })
    });
});

module.exports = router;