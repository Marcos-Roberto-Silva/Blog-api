const userController = require('../controllers/userController');
const decodeJwt = require('../helpers/decodeJwt');

const message = 'jwt malformed';

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
 
    try {
        if (!authorization) return res.status(401).json({ message });
        const decoded = decodeJwt(authorization);

        if (!decoded) return res.status(401).json({ message });

        const userInserted = decoded.payload.data;
        const { email } = userInserted;
        const user = await userController.userValidation(email);

        if (!user) { 
            return res.status(401).json({ message });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: 'jwt malformed' });
    }
};

module.exports = auth;