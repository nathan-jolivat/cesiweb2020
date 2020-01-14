const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const vue = require('vue');
const axios = require('axios');

const port = 3000;

app.use('/static', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/nous-contacter', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/contact-request/process', function(req, res) {
    console.log(req);
});

app.listen(port, () => console.log(`Appli démarrée sur le port ${port}!`));
