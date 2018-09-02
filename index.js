'use strict';

const hogan = require('hogan-express-strict');
const express = require('express');
const server = express();
const routes = require('./routes');
const path = require('path');
const config = require('./config');

/*
  This tells the server where to get the CSS, images and JavaScript from
*/
server.use('/public', express.static('public'));

/*
  The section is what we need to make the server return the html files (views)
  to the browser when you visit the website
*/
server.set('view engine', 'html');
server.enable('view cache');
server.engine('html', hogan);
server.set('views', path.resolve('./views'));

/*
  Thie is how we tell the server what to do when the browser wants to load
  page, such as /recipes, or /music
*/
server.use(routes);

/*
  This tells the server listen for requests from the browser
*/
server.listen(config.port);


console.log(`Server listening on port ${config.port}`);
