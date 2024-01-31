const { apiDatabaseConnection } = require('../config/dbConnection');

//setting header with required params
const healthCheck = async (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('X-Content-Type-Options', 'nosniff');

    try {
        const isDatabaseConnected = await apiDatabaseConnection();

        //to through error if there is any query,params, body
    if (Object.keys(req.query).length > 0 || Object.keys(req.params).length > 0 || Object.keys(req.body).length > 0 || req.headers['content-length'] > 0) {
        res.status(400).send();
        return;
    }
        if (isDatabaseConnected) {
            console.log('isDatabaseConnected');
            res.status(200).send();
        } else {
            console.log('not isDatabaseConnected');
            res.status(503).send();
        }
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
};

module.exports = { healthCheck };

