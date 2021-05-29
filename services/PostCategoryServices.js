const { BlogPost, User } = require('../models');

const getAllPostCategories = async () => {
    const postCategory = await BlogPost.findAll({ include: {
        model: User, as: 'users' } }).then((listOfPosts) => {
            if (!listOfPosts.length) {
                return 'Post not found';
            }
            return listOfPosts;
        });
        return postCategory;
};

module.exports = {
    getAllPostCategories,
};
