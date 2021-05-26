const code = require('./codeError');
const message = require('./messageError');

const createError = (myCode, msg) => ({
  code: myCode,
  codeMsg: msg,
});

const testForName = (error) => { 
  if (error.errors[0].msg === 'Invalid value' && error.errors[0].param === 'displayName') {
    return createError(code.unauthorized, message.nameIsShort);
  } 
  return false;
};

const testEmailFormat = (error) => { 
  if (error.errors[0].msg === 'Invalid value' && error.errors[0].param === 'email') {
    return createError(code.unauthorized, message.emailIsWrongFormat);
  } 
  return false;
};

const emptyEmail = (error) => { 
  if (error.errors[0].value === undefined && error.errors[0].param === 'email') {
    return createError(code.unauthorized, message.emailRequired);
  } 
  return false;
};

const userAlreadyExist = async (user) => {
  if (user.length === 0) {
    return false;
  }

  return createError(code.conflicts, message.userAlreadyExists);
};

module.exports = {
  userAlreadyExist,
  testEmailFormat,
  createError,
  testForName,
  emptyEmail,
};