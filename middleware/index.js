const validationFieldName = require('./validationFieldName');
const validationFieldEmail = require('./validationFieldEmail');
const validationFieldsPassword = require('./validationFieldsPassword');
const emailIsRequired = require('./emailIsRequired');
const passwordIsRequired = require('./passwordIsRequired');
const emailCannotBeEmpty = require('./emailCannotBeEmpty');
const passwordCannotBeEmpty = require('./passwordCannotBeEmpty');
const fieldNameIsRequired = require('./fieldNameIsRequired');
const fieldTitleIsRequired = require('./titleIsRequired');
const contentIsRequired = require('./contentIsRequired');
const fieldCategoryIdIsRequired = require('./fieldCategoryIdIsRequired');

module.exports = {
    validationFieldName,
    validationFieldEmail,
    validationFieldsPassword,
    emailIsRequired,
    passwordIsRequired,
    emailCannotBeEmpty,
    passwordCannotBeEmpty,
    fieldNameIsRequired,
    fieldTitleIsRequired,
    contentIsRequired,
    fieldCategoryIdIsRequired,
};