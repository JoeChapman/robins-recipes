'use strict';

const hogan = require('hogan-express-strict');
const express = require('express');
const server = express();
const path = require('path');

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
  This section is what tells our server to do when the browser asks for things
*/
server.get('/', (request, response) => {
  response.render('index');
});

server.get('/recipes/:name?', (request, response) => {
  const parameters = request.params;
  if (parameters && parameters.name) {
    return response.render(`recipes/${parameters.name}`);
  }
  response.render('recipes');
});

server.get('/about', (request, response) => {
  response.render('about');
});

server.listen('8080');

console.log('Server listening on port 8080');
