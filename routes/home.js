const express = require('express');
const router = express.Router();

let movies = require(`${__dirname}/../data/movie.json`)

const series = require(`${__dirname}/../data/series.json`)

router.get('/', (req, res) => {
    res.json({ movies, series })
});

module.exports = router;