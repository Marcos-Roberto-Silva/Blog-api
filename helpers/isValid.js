const code = require('./codeError');
const message = require('./messageError');

const createError = (myCode, msg) => ({
  code: myCode,
  codeMsg: msg,
});

const userAlreadyExist = async (user) => {
  if (user.length === 0) {
    return false;
  }

  return createError(code.conflicts, message.userAlreadyExists);
};

const userSearch = async (user) => {
  if (user.length === 0) {
    return createError(code.badRequest, message.invalidFields);
  }
  return false;
};

const searchById = async (user) => {
  if (user === null) {
    return createError(code.notFound, message.userDoesNotExists);
  }
  return false;
};

module.exports = {
  userAlreadyExist,
  createError,
  userSearch,
  searchById,
  // testForEmail,
  // testForPassword,
};