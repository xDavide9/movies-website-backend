const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/popular", (req, res) => {
  // get the most popular films of all time
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&page=${req.query.page}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/year", (req, res) => {
  // get the most popular films from a specific interval of time
  // yyyy-mm-dd
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&primary_release_year=${req.query.year}&sort_by=popularity.desc`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/genre", (req, res) => {
  // get the most popular film of each genre that is associated with an id
  // 28 action
  // 12 adventure
  // 16 animation
  // 35 comedy
  // 80 crime
  // 99 documentary
  // 18 drama
  // 10751 family
  // 14 fantasy
  // 36 history
  // 27 horror
  // 10402 music
  // 9648 mystery
  // 10749 romance
  // 878 science fiction
  // 10770 tv movie
  // 53 thriller
  // 10752 war
  // 37 western

  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${req.query.genre}&sort_by=popularity.desc`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
