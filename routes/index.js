'use strict';

const router = require('express').Router();

router.get('/', (request, response) => {
  response.render('index');
});

router.get('/recipes/:name?', (request, response) => {
  const name = request.params && request.params.name;
  return response.render(`recipes/${name || ''}`);
});

router.get('/about', (request, response) => {
  response.render('about');
});

router.get('/music/:name?', (request, response) => {
  const name = request.params && request.params.name;
  return response.render(`music/${name || ''}`);
});

module.exports = router;
