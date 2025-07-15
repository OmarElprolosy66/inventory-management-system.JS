import { body } from 'express-validator';

export const purchaseValidator = [
    body('invoice_number')
        .notEmpty()
        .isString()
        .isLength({ min: 3, max: 100 })
        .withMessage('Invoice number must be between 3 and 100 characters'),
        
    body('supplier')
        .notEmpty()
        .isMongoId()
        .withMessage('Valid supplier ID is required'),

    body('total_amount')
        .notEmpty()
        .isNumeric()
        .withMessage('Total amount must be a valid number'),

    body('status')
        .isIn(['pending', 'received', 'cancelled'])
        .withMessage('Status must be one of: pending, received, cancelled'),

    body('items')
        .isArray({ min: 1 })
        .withMessage('At least one purchase item is required'),

    body('items.*.product')
        .notEmpty()
        .isMongoId()
        .withMessage('Each item must have a valid product ID'),

    body('items.*.quantity')
        .notEmpty()
        .isInt({ min: 1 })
        .withMessage('Each item must have a quantity of at least 1'),
        
    body('items.*.cost_price')
        .notEmpty()
        .isNumeric()
        .withMessage('Each item must have a valid cost price'),
    
    body('items.*.total')
        .notEmpty()
        .isNumeric()
        .withMessage('Each item must have a valid total'),

    body('created_by')
        .notEmpty()
        .isMongoId()
        .withMessage('Valid creator (user) ID is required'),
];
