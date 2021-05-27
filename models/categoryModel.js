const createCategories = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Category', {
        name: DataTypes.STRING,
    }, 
    {
        timestamps: false,
    });

    Categories.associate = (models) => {
        console.log(models);
    };

    return Categories;
};

module.exports = createCategories;