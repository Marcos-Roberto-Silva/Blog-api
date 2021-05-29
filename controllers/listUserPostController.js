const services = require('../services/userServices');

const getListUserPosts = async (req, res) => {
    const listUserPosts = await services.getUserPostOnServices(req.params.id);
    res.status(200).json(listUserPosts);
};

module.exports = {
    getListUserPosts,
};