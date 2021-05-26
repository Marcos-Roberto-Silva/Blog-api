const validationFieldName = require('./validationFieldName');
const validationFieldEmail = require('./validationFieldEmail');
const validationFieldsPassword = require('./validationFieldsPassword');
const emailIsRequired = require('./emailIsRequired');
const passwordIsRequired = require('./passwordIsRequired');
const emailCannotBeEmpty = require('./emailCannotBeEmpty');
const passwordCannotBeEmpty = require('./passwordCannotBeEmpty');

module.exports = {
    validationFieldName,
    validationFieldEmail,
    validationFieldsPassword,
    emailIsRequired,
    passwordIsRequired,
    emailCannotBeEmpty,
    passwordCannotBeEmpty,
};