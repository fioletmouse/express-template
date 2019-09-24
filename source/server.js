process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require("express");
const contextService = require('request-context');
const bodyParser = require('body-parser');
const helmet = require('helmet')

// custom
const config = require('./config');
const unauth = require('./middleware/check-token');
const api = require('./routes/api.js')
const not_found = require('./middleware/not-found');
const error = require('./middleware/error')

const app = express();

app.use(contextService.middleware('request'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet())

app.use(unauth); // check the token
app.use('/api', api); // api routing
app.use(not_found); // catch 404 and forward to error handler
app.use(error); // error handler

app.listen(config.port);

module.exports = app;