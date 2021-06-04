// Check if is a valid email address
export function checkEmail(email) {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isMatching = regexEmail.test(email);
    return isMatching;
};

// Check if password is strong enough
export function checkPassword(a) {
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const isMatching = regexPassword.test(a);
    return isMatching;
};

// Check if text contains numbers or/and special characters
export function checkText(string) {
    const regexAlpha = /^[A-Za-z]+$/;
    const isMatching = regexAlpha.test(string);
    return isMatching;
};

// Confirm if passwords are exact 
export function comparePassword(a, b) {
    return a === b ? true : false;
};