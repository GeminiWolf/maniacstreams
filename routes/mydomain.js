const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('shows')
});
router.post('/', (req, res) => {
    res.send('shows')
});
router.put('/', (req, res) => {
    res.send('shows')
});
router.delete('/', (req, res) => {
    res.send('shows')
});

module.exports = router;