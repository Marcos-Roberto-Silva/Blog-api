const categoryService = require('../services/categoryServices');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
    const category = await categoryService.createCategory(name);
    if (category.code) {
        return res.status(category.code).json({ message: category.message });
    }
    return res.status(201).json(category);
    } catch (error) {
        return res.status(201).json({ message: error.message });
    }
};

const getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
};