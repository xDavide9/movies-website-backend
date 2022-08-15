const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  // get the most popular films in descending order from the api
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
