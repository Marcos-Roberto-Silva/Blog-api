const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const validation = require('../middleware');
const auth = require('../auth/jwtValidator');
// const auth = require('../auth/jwtValidator');

const router = Router();

// router.get('/', userController.getUsersController);
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

router.get('/user', auth, userController.getAllUsers);

module.exports = router;