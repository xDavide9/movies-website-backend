require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
const searchRouter = require("./routes/search");
const discoverRouter = require("./routes/discover");
const configRouter = require("./routes/config");

app.use(cors());
app.use("/.netlify/functions/api/search", searchRouter);
app.use("/.netlify/functions/api/discover", discoverRouter);
app.use("/.netlify/functions/api/config", configRouter);

module.exports.handler = serverless(app);
