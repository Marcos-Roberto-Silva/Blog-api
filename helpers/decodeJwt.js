const jwt = require('jsonwebtoken');
require('dotenv').config();

const decodeJwt = (token) => {
    const secret = process.env.SECRET_PASS;
    const decode = jwt.verify(token, secret);
    return decode;
};

module.exports = decodeJwt;