const servicesUsers = require('../services/userServices');
// const getUserController = async (_req, res) => {
//     const user = await servicesUsers.getAllOnServices();
//     res.status(200).json(user);
// };

const createUserController = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const payload = {
        displayName, 
        email, 
        password, 
        image,
    };
  
    const users = await servicesUsers.createUserOnServices(payload);

    if (users.code) {
        return res.status(users.code).json({ message: users.codeMsg });
    }
    res.status(200).json(users);
};

module.exports = {
    createUserController,
};