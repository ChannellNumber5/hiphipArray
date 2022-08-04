const jdubt = require('jsonwebtoken');

const secret = 'supersecretinfinitysecretttt';
const expiration = '1h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization; //defines the token as an opiong, coming from the request body OR the query OR from the header of the request
        
        if (req.headers.authorization) {
            
        }
    }
}