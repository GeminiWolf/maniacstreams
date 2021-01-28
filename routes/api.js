const express = require('express');
const router = express.Router();
const data = require('../data/movie.json');
const fetch = require("node-fetch");
require('dotenv').config();

router.get('/trending', (req, res) => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIEAPI}`)
        .then(json => json.json())
        .then(data => { res.json(data.results) })
        .catch(err => console.log(err))
});

// movies
router.get('/movies/:page', (req, res) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEAPI}&language=en-US&page=${req.params.page}`)
        .then(json => json.json())
        .then(data => { res.json(data.results) })
        .catch(err => console.log(err))
});

// series
router.get('/series/:page', (req, res) => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEAPI}&language=en-US&page=${req.params.page}`)
        .then(json => json.json())
        .then(data => { res.json(data.results) })
        .catch(err => console.log(err))
});

// search
router.get('/search/:searchTerm/:page', (req, res) => {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIEAPI}&query=${req.params.searchTerm}&page=${req.params.page}`)
        .then(json => json.json())
        .then(data => { res.json(data.results) })
        .catch(err => res.json(err))
});


module.exports = router;