const code = require('./codeError');
const message = require('./messageError');

const createError = (myCode, msg) => ({
  code: myCode,
  codeMsg: msg,
});

// const testForName = (error) => { 
//   console.log(error);
//   if (error.errors[0].msg === 'Invalid value' && error.errors[0].param === 'displayName') {
//     return createError(code.badRequest, message.nameIsShort);
//   } 
//   if (error.errors[0].param === 'email' && error.errors[0].msg) {
//     return createError(code.badRequest, message.emailIsWrongFormat);
//   }
//   return false;
// };

// const testForEmail = (error) => {
//     if (error.errors[0].value === undefined && error.errors[0].param === 'email') {
//       return createError(code.badRequest, message.emailRequired);
//     }
//     if (error.errors[0].msg === 'Invalid value' && error.errors[0].param === 'password') {
//       return createError(code.badRequest, message.passwordShorterThan);
//     }
//   return false;
// };

// const testForPassword = (error) => {
//   if (error.errors[0].value === undefined && error.errors[0].param === 'password') {
//     return createError(code.badRequest, message.passwordRequired);
//   }
  
// return false;
// };

const userAlreadyExist = async (user) => {
  if (user.length === 0) {
    return false;
  }

  return createError(code.conflicts, message.userAlreadyExists);
};

module.exports = {
  userAlreadyExist,
  createError,
  // testForName,
  // testForEmail,
  // testForPassword,
};