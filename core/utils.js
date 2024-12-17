export const emailValidator = email => {
const re = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!email || email?.length <= 0) return true;
    return !re.test(email);
}

export const validator = parametre => {
    return !parametre || parametre?.length <= 0;
}
