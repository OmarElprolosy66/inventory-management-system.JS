import { body } from 'express-validator';

export const createUserValidator = [
    body('name')
        .notEmpty()
        .isString()
        .isLength({ min: 2, max: 255 })
        .withMessage('Name must be at least 2 characters and not more than 255 characters'),

    body('email')
        .notEmpty()
        .isString()
        .isEmail().withMessage('Valid email is required'),

    body('password')
        .notEmpty()
        .withMessage('Password is required'),
    
    body('role')
        .notEmpty()
        .isIn(['admin', 'manager', 'employee'])
        .withMessage('Role must be one of: admin, manager, employee'),
];

export const updateUserValidator = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 255 })
        .withMessage('Name must be at least 2 characters and not more than 255 characters'),

    body('email')
        .notEmpty()
        .isEmail().withMessage('Valid email is required'),
    
    body('role')
        .notEmpty()
        .isIn(['admin', 'manager', 'employee'])
        .withMessage('Role must be one of: admin, manager, employee'),
];

