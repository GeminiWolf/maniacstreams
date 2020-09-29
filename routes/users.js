const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const users = [{
        id: 1,
        name: 'rob',
        number: 3456789,
    }, {
        id: 2,
        name: 'bob',
        number: 3443568,
    }, {
        id: 3,
        name: 'bor',
        number: 7655433,
    },]

    res.json(users);
});

module.exports = router;