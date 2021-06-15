const userController = require('../controllers/userController');
const decodeJwt = require('../helpers/decodeJwt');
const errMessage = require('../helpers/messageError');

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
 
    try {
        if (!authorization) return res.status(401).json({ message: errMessage.tokenNotFound });
        const decoded = decodeJwt(authorization);

        if (!decoded) return res.status(401).json({ message: errMessage.invalidToken });

        const userInserted = decoded.payload.data;
        const { email } = userInserted;
        const user = await userController.userValidation(email);

        if (!user) { 
            return res.status(401).json({ message: errMessage.invalidToken });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = auth;