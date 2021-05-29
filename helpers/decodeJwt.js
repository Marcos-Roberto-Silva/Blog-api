const jwt = require('jsonwebtoken');

const decodeJwt = (token) => {
    const secret = 'nk-myt67/34';
    const decode = jwt.verify(token, secret);
    return decode;
};

module.exports = decodeJwt;