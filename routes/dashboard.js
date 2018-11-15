var express = require("express");
var router = express.Router();
var axios = require("axios");
var config = require("../common/config");
var jwt = require("jsonwebtoken");
var _ = require('lodash');

var decodedToken = undefined

function getUserInformation() {
  return axios.get(config.application.API_URL + `getUserInfoByUserName?username=${decodedToken.username}`, {
      headers: {
        "Authorization": token
      }
    })
    .then(response => {
      console.log(response.data.data[0])
      return response.data.data[0]
    }).catch(function (error) {
      console.log("error")
    })
}

router.get("/dashboard", (req, res) => {

  token = req.cookies.token

  try {
    decodedToken = jwt.verify(token, config.application.SECRET_KEY);
  } catch (error) {
    res.redirect("/")
    console.log(error)
  }

  getUserInformation(req).then((data) => {

    res.render("screens/dashboard/dashboard", {
      title: "Dashboard",
      username: decodedToken.username,
      name: _.toUpper(decodedToken.scope.name),
      phone: data.phone
    });
  })

});

module.exports = router;