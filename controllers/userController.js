const jwtFunc = require('../helpers/jwt');
const servicesUsers = require('../services/userServices');

const userValidation = async (email) => {
    const user = await servicesUsers.getUserOnServices(email);
    return user;
};

const getAllUsers = async (req, res) => {
    const users = await servicesUsers.getAllUsers();
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const user = await servicesUsers.getUserById(req.params.id);
    console.log(user);
    if (user.code) {
        return res.status(user.code).json({ message: user.codeMsg });
    }
    res.status(200).json(user);
};

const userLogin = async (req, res) => {
    const { email } = req.body;
    const payload = { email };

    const user = await servicesUsers.userLoginOnServices(payload);

    if (user.code) {
        return res.status(user.code).json({ message: user.codeMsg });
    }
    
    const tokenResult = await jwtFunc(payload);
    res.status(200).json({ token: tokenResult });
};

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
    const { displayName: name, email: Email } = users;

    const data = { name, Email };
    const tokenResult = await jwtFunc(data);

    res.status(201).json(tokenResult);
};

module.exports = {
    createUserController,
    userValidation,
    userLogin,
    getAllUsers,
    getUserById,
};