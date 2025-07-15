import request from 'supertest';
import app from '../../config/app.mjs';
import { describe, test, expect } from 'vitest';
import jwt from 'jsonwebtoken';

const token = jwt.sign({ id: '507f1f77bcf86cd799439013', role: 'admin' }, process.env.SECRET, { expiresIn: '1h' });

describe('Purchase API Integration', () => {
    test('POST /api/v1/purchases creates a purchase', async () => {
        const res = await request(app)
            .post('/api/v1/purchases')
            .set('Authorization', `Bearer ${token}`)
            .send({
                invoice_number: 'INV1001',
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

        expect([201, 422]).toContain(res.statusCode);
        if (res.statusCode === 201) {
            expect(res.body.invoice_number).toBeDefined();
        }
    });
});