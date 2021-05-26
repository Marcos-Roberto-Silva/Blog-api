const { Op } = require('sequelize');
const { User } = require('../models');
const helper = require('../helpers/isValid');

const getUseOnServices = async (email) => {
    const user = await User.findAll({
        where: {
            email: {
                [Op.like]: `%${email}%`,
            },
        },
    });
    return user;
};

const createUserOnServices = async (payload) => {
    const { email } = payload;
    const userExists = await getUseOnServices(email);

    const checkUser = await helper.userAlreadyExist(userExists);
    if (!checkUser.code) {
        const user = await User.create(payload);
        return user;
    }
    return checkUser;
};

module.exports = {
    createUserOnServices,
};