const express = require('express');
const router = express.Router();
const data = require('../data/movie.json');
const fetch = require("node-fetch");
require('dotenv').config();

router.get('/movies', (req, res) => {
    res.json(data)
});

router.get('/movies/:movie', (req, res) => {
    res.send('shows')
});

router.get('/trending', (req, res) => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIEAPI}`)
        .then(json => json.json())
        .then(data => { res.json(data.results) })
        .catch(err => console.log(err))
});

router.get('/series/:series', (req, res) => {
    res.send('shows')
});

module.exports = router;