import joi from 'joi';

export const newUserSchema = joi.object({
    names: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    role: joi.string().valid( 'admin', 'user', 'customer').required(),
    password: joi.string().min(6).max(20).required(),
});