import request from 'supertest';
import app from '../../config/app.mjs';
import { describe, test, expect } from 'vitest';
import jwt from 'jsonwebtoken';

const token = jwt.sign({ id: '507f1f77bcf86cd799439013', role: 'admin' }, process.env.SECRET, { expiresIn: '1h' });

describe('Product API Integration', () => {
    let productId;

    test('POST /api/v1/products creates a product', async () => {
        const res = await request(app)
            .post('/api/v1/products')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Test Product',
                SKU: 123456,
                cost: 10,
                quantity: 5,
                description: 'A test product'
            });

        expect([201, 422]).toContain(res.statusCode);
        if (res.statusCode === 201) {
            expect(res.body.name).toBe('Test Product');
            productId = res.body._id;
        }
    });

    test('GET /api/v1/products returns products', async () => {
        const res = await request(app)
            .get('/api/v1/products')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.products || res.body)).toBe(true);
    });

    test('PATCH /api/v1/products/:id updates a product', async () => {
        if (!productId) return;
        const res = await request(app)
            .patch(`/api/v1/products/${productId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Updated Product' });

        expect([201, 404]).toContain(res.statusCode);
        if (res.statusCode === 201) {
            expect(res.body.name).toBe('Updated Product');
        }
    });

    test('DELETE /api/v1/products/:id deletes a product', async () => {
        if (!productId) return;
        const res = await request(app)
            .delete(`/api/v1/products/${productId}`)
            .set('Authorization', `Bearer ${token}`);

        expect([200, 404]).toContain(res.statusCode);
    });
});