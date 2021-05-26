const { Op } = require('sequelize');
const { User } = require('../models');
const helper = require('../helpers/isValid');

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    const userNotFound = await helper.searchById(user);
    if (userNotFound.code) {
        return userNotFound;
    }
    return user;
};

const getUserOnServices = async (email) => {
    const user = await User.findAll({
        where: {
            email: {
                [Op.like]: `%${email}%`,
            },
        },
    });

    return user;
};

const userLoginOnServices = async (obj) => {
    const { email } = obj;
    const user = await User.findAll({
        where: {
            email: {
                [Op.like]: `%${email}%`,
            },
        },
    });

    const checkUserLogin = await helper.userSearch(user);

    if (checkUserLogin.code) {
        return checkUserLogin;
    }

    return user;
};

const createUserOnServices = async (payload) => {
    const { email } = payload;
    const userExists = await getUserOnServices(email);

    const checkUser = await helper.userAlreadyExist(userExists);
    if (!checkUser.code) {
        const user = await User.create(payload);
        return user;
    }
    return checkUser;
};

module.exports = {
    createUserOnServices,
    getUserOnServices,
    userLoginOnServices,
    getAllUsers,
    getUserById,
};