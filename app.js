const express = require('express');
const app = express();
app.use(require('cors')())
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');

module.exports = app;
