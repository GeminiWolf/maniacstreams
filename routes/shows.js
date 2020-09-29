const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.send('shows')
});

router.get('/movies/:movie', (req, res) => {
    res.send('shows')
});

router.get('/series', (req, res) => {
    res.send('shows')
});

router.get('/series/:series', (req, res) => {
    res.send('shows')
});

module.exports = router;