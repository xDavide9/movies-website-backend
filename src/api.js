require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
const searchRouter = require("./routes/search");

app.use(cors());
app.use("/.netlify/functions/api/search", searchRouter);

module.exports.handler = serverless(app);
