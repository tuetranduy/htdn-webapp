const envConfig = require("./env.config");

const env = process.env.NODE_ENV || "development";

module.exports = Object.freeze({
  application: {
    API_URL: envConfig[env].API_URL,
    SECRET_KEY: envConfig[env].SECRET_KEY
  }
})