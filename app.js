const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = 3000;

app.use('/static', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/nous-contacter', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.listen(port, () => console.log(`Appli démarrée sur le port ${port}!`));
