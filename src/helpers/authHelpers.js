import bcrypt from "bcrypt";

export const hashPassword = async (unHashedpassword) => {
    return await bcrypt.hash(unHashedpassword, 10);
};
