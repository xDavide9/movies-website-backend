const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/genres", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
