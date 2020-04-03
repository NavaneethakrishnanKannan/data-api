require('dotenv').config();
const express = require('express');
const app = express();
app.use(require("cors")())
app.disable('x-powered-by');

module.exports = app;