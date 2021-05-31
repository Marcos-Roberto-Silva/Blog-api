const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const listUserPost = require('../controllers/listUserPostController');
const categoryController = require('../controllers/categoryController');
const postController = require('../controllers/blogPostController');
const getPosts = require('../controllers/blogPostController');
const validation = require('../middleware');
const auth = require('../auth/jwtValidator');
// const auth = require('../auth/jwtValidator');

const router = Router();

// router.get('/', userController.getUsersController);
router.get('/post', auth, getPosts.getPosts);
router.post('/categories', auth, 
                           validation.fieldNameIsRequired, 
                           categoryController.createCategory);

router.post('/user', body('displayName').isString().isLength({ min: 8 }),
                 body('email').isEmail().notEmpty(),
                 body('password').notEmpty().isLength({ min: 6 }),
                 validation.validationFieldName, 
                 validation.validationFieldEmail,
                 validation.validationFieldsPassword,
                 validation.emailIsRequired,
                 validation.passwordIsRequired,
                 userController.createUserController);
                 
router.post('/login', body('email').isEmail().notEmpty(),
                      body('password').notEmpty().isLength({ min: 6 }),
                      validation.emailIsRequired,
                      validation.passwordIsRequired,
                      validation.emailCannotBeEmpty,
                      validation.passwordCannotBeEmpty,
                      userController.userLogin);

router.post('/post', body('title').notEmpty(),
                     body('categoryIds').notEmpty(),
                     body('content').notEmpty(),
                     auth, validation.fieldTitleIsRequired, 
                           validation.contentIsRequired,
                           validation.fieldCategoryIdIsRequired,
                           postController.createBlogPost);

router.get('/user', auth, userController.getAllUsers);
router.get('/user/:id', auth, userController.getUserById);
router.get('/categories', auth, categoryController.getAllCategories);
router.get('/userPost/:id', listUserPost.getListUserPosts); // req - 9

module.exports = router;