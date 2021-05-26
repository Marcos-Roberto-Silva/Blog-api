const { validationResult } = require('express-validator');
const isValid = require('../helpers/isValid');

const validationFields = (req, res, next) => {
  let emailTest;
  const error = validationResult(req);
  const checkName = isValid.testForName(error);
  const checkEmail = isValid.testEmailFormat(error);
  const emptyEmail = isValid.emptyEmail(error);
  console.log(checkEmail);
    if (!checkEmail) {
      emailTest = emptyEmail;
    }
    emailTest = checkEmail;

      switch (error.errors[0].param) {
        case 'displayName': res.status(checkName.code).json({ message: checkName.codeMsg });
          break;
        case 'email': res.status(emailTest.code).json({ message: emailTest.codeMsg });
          break;
        default:
          next();
      }
};

module.exports = validationFields;