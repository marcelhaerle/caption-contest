const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hello world!');
})

module.exports = app;
