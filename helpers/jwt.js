const jwt = require('jsonwebtoken');
require('dotenv').config();

// const secret = process.env.SECRET_PASS;
const secret = 'doNotDoItAtHomeKids';
console.log('my secret', secret);

const jwtFunc = async (user) => {
    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    const payload = {
        data: user,
     };

     const token = jwt.sign({ payload }, secret, jwtConfig);
     return token;
};

module.exports = jwtFunc;
