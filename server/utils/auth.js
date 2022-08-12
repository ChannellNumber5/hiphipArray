require ('dotenv').config()
const jdubt = require('jsonwebtoken');

const secret = process.env.SECRET
const expiration = '1h';

module.exports = {
    authMiddleware: function ({ req }) {
        
        let token = req.body.token || req.query.token || req.headers.authorization; //defines the token as an opiong, coming from the request body OR the query OR from the header of the request
        
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim(); //takes just the first part of the token splitting it into an array based on spaces, taking the last item of the array and then trimming off any spaces at the end of that element
        }
        if (!token) {
            return req;
        }

        try{
            const { data } = jdubt.verify(token, secret, {maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jdubt.sign ({ data: payload }, secret, { expiresIn: expiration });
    },
};

