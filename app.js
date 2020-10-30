const express = require('express'),
    app = express(),
    request = require('request');
const host = '127.0.0.1';
const port = '3000';
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/game', (req, res) => {
    res.render('game');
});
app.get('/response', (req, res) => {
    res.render('response', {qs: req.query});
});
app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));

