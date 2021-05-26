const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const { validationField } = require('../middleware');

const router = Router();

// router.get('/', userController.getUsersController);
router.post('/', body('displayName').isString().isLength({ min: 8 }),
                 body('email').isEmail().notEmpty(),
                 body('password').notEmpty().isLength({ min: 6 }),
  validationField, userController.createUserController);

module.exports = router;