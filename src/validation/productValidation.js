import joi from 'joi';

export const productSchema = joi.object({
    name: joi.string().min(2).max(100).required(),
    price: joi.number().min(0).required(),
    description: joi.string().optional(),
    category: joi.string().valid('electronics', 'clothing', 'home', 'food').required()
});
