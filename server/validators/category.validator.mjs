import { body } from 'express-validator';

export const categoryValidator = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 500 })
        .withMessage('Name must be at least 2 characters and not more than 500 characters'),
];
