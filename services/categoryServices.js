// const { Op } = require('sequelize');
const { Category } = require('../models');
// const helper = require('../helpers/isValid');
const errCode = require('../helpers/codeError');
const errMessage = require('../helpers/messageError');

const createCategory = async (name) => {
    const code = errCode.badRequest;
    const message = errMessage.fieldNameIsRequired;
    const payload = { code, message };
    
    if (name === undefined) {
        return payload; 
    }
    const category = await Category.create({ name });
    return category;
};

const getAllCategories = async () => {
    const categories = Category.findAll();
    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};