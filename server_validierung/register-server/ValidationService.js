// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("mobile", userObj.mobile);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("company", userObj.company);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("username",userObj.username, 8, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 8, 30);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("mobile", userObj.mobile, 8, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("company", userObj.company, 3, 30);
    if (result.isNotValid) { return result; }



    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
