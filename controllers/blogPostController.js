const blogPostService = require('../services/blogPostService');
const decode = require('../helpers/decodeJwt');

const createBlogPost = async (req, res) => {
    const { authorization } = req.headers;
    const { payload: { data } } = decode(authorization);
    const userEmail = data.email;

    const { title, content, categoryIds } = req.body;
    const payload = { title, content, categoryIds, userEmail };

    const categoriesItems = await blogPostService.createBlogPost(payload);

    if (categoriesItems.code) {
        return res.status(categoriesItems.code).json({ message: categoriesItems.codeMsg });
    }
    const { postId: id, userId } = categoriesItems;
    res.status(201).json({ id, userId, title, content });
};

const getPosts = async (req, res) => {
    const post = await blogPostService.getPosts();
    console.log(post);
    res.status(200).json(post);
};

module.exports = {
    createBlogPost,
    getPosts,
};