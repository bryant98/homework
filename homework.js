const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.get('/test', (req, res) => res.send('Test Now'));
app.get('/redirect', function(req, res) => res.redirect('/'));
app.use(function(req, res, next) => res.status(404).send('404 Not found');

app.listen(3000);
