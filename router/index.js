const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const validation = require('../middleware');

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

module.exports = router;