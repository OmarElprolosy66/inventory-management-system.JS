import { body } from 'express-validator';

export const productValidator = [
    body('name')
        .notEmpty()
        .isString()
        .isLength({ min: 2, max: 255 })
        .withMessage('Name must be at least 2 characters and not more than 255 characters'),

    body('SKU')
        .notEmpty()
        .withMessage('Valid SKU is required'),

    body('quantity')
        .notEmpty()
        .isNumeric()
        .withMessage('Quantity is required'),
    
    body("cost")
        .notEmpty()
        .isDecimal()
        .withMessage("Product cost is required"),

    body('description')
        .optional()
        .isAlphanumeric()
        .withMessage('Description must be alphanumeric'),
];