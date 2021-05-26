const { validationResult } = require('express-validator');
const errCode = require('../helpers/codeError');
const errMessage = require('../helpers/messageError');

const emailIsRequired = (req, res, next) => {
  const error = validationResult(req);
  let field = '';
  let fieldValue = '';

  if (error.errors[0] !== undefined) {
    field = error.errors[0].param;
    fieldValue = error.errors[0].value;
  }

  if (!error.isEmpty() && field === 'email' && fieldValue === undefined) {
    return res.status(errCode.badRequest).json({ message: errMessage.emailRequired });
  }

      next();
};

module.exports = emailIsRequired;