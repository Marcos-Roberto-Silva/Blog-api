const createPostCategory = (sequelize, _DataTypes) => {
    const PostCategory = sequelize.define('PostsCategories', {}, { timestamps: false });
    PostCategory.associate = (models) => {
        console.log(models);
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };
    return PostCategory;
};

module.exports = createPostCategory;