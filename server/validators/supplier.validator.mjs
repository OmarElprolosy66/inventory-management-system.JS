import { body } from 'express-validator';

export const supplierValidator = [
    body('name')
        .notEmpty()
        .isString()
        .isLength({ min: 2, max: 255 })
        .withMessage('Name must be at least 2 characters and not more than 255 characters'),

    body('email')
        .notEmpty()
        .isString()
        .isEmail().withMessage('Valid email is required'),

    body('phone')
        .isString()
        .withMessage('Valid phone number is required'),
    
    body('address')
        .isString()
        .withMessage('Valid address is required'),

    body('notes')
        .isString()
        .withMessage('somthing went wrong'),
];