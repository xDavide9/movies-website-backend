require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
const discoverRouter = require("./routes/discover");

app.use(cors());
app.use("/.netlify/functions/api/discover", discoverRouter);

module.exports.handler = serverless(app);
