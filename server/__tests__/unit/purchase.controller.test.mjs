import request from 'supertest';
import app from '../../config/app.mjs';
import PurchaseService from '../../app/services/purchase.service.mjs';
import { describe, test, expect, vi, afterEach } from 'vitest';

import jwt from 'jsonwebtoken';
const token = jwt.sign({ id: 'testuserid', role: 'admin' }, process.env.SECRET, { expiresIn: '1h' });

vi.mock('../../app/services/purchase.service.mjs');

describe('PurchaseController', () => {
    afterEach(() => vi.clearAllMocks());

    test('findAll returns purchases', async () => {
        PurchaseService.findAll.mockResolvedValue({ purchases: [{ invoice_number: 'INV1' }] });

        const res = await request(app)
            .get('/api/v1/purchases')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.purchases.length).toBeGreaterThan(0);
    });

    test('create returns new purchase', async () => {
        PurchaseService.create.mockResolvedValue({ invoice_number: 'INV2' });

        const res = await request(app)
            .post('/api/v1/purchases')
            .set('Authorization', `Bearer ${token}`)
            .send({
                invoice_number: 'INV2',
                status: "received",
                supplier: '507f1f77bcf86cd799439011',
                total_amount: 100,
                items: [{
                    product: '507f1f77bcf86cd799439012',
                    quantity: 1,
                    cost_price: 100,
                    total: 100
                }],
                created_by: '507f1f77bcf86cd799439013'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.invoice_number).toBe('INV2');
    });
});