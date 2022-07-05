const axios = require("axios");

module.exports = axios.create({
  baseURL: "http://app.omie.com.br/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
