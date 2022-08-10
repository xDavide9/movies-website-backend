const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/posters", (req, res) => {
  const data = {};
  const results = [];

  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${req.query.query}&language=${req.query.language}&page=${req.query.page}`
    )
    .then((response) => {
      for (let i = 0; i < response.data.results.length; i++) {
        if (
          response.data.results[i].popularity >= req.query.minimumPopularity
        ) {
          results.push(response.data.results[i]);
        }
      }
      results.sort((a, b) =>
        a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
      );
      data.page = response.data.page;
      data.results = results;
      data.total_pages = response.data.total_pages;
      data.total_results = response.data.total_results;
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/info", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${req.query.id}?api_key=${process.env.API_KEY}&language=${req.query.language}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
