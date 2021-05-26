const jwt = require('jsonwebtoken');

const decodeJwt = (token) => {
    const secret = 'justKnowThatNotknow';
    const decode = jwt.verify(token, secret);
    return decode;
};

module.exports = decodeJwt;