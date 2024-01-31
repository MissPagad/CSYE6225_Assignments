// const express = require('express');
// const { healthCheck } = require('../controllers/healthController');
// const router = express.Router();
// router.get('/healthz', healthCheck);
// module.exports = router;

const express = require('express');
const { healthCheck } = require('../controllers/healthController');

const router = express.Router();

router.all('/healthz', (req, res) => {
    console.log('In all method');
    // if not a get method, 405 error code
    if (req.method !== 'GET') {
        console.log('In get method');
        return res.status(405).send();
    }
    //return only for get method
    healthCheck(req, res);
});

module.exports = router;

