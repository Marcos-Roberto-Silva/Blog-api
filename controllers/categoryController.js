const categoryService = require('../services/categoryServices');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.createCategory(name);
    if (category.code) {
        return res.status(category.code).json({ message: category.message });
    }
    res.status(201).json(category);
};

module.exports = {
    createCategory,
};