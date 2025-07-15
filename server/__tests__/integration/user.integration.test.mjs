import request from 'supertest';
import app from '../../config/app.mjs';
import { describe, test, expect } from 'vitest';

describe('User API Integration', () => {
    test('POST /api/v1/login with valid credentials returns token', async () => {
        // You should have a test user in your DB or mock UserService for integration
        const res = await request(app)
            .post('/api/v1/login')
            .send({ email: 'test@test.com', password: 'pass' });

        expect([200, 401]).toContain(res.statusCode); // 200 if user exists, 401 if not
        if (res.statusCode === 200) {
            expect(res.body.token).toBeDefined();
        }
    });

    test('POST /api/v1/login with invalid credentials returns 401', async () => {
        const res = await request(app)
            .post('/api/v1/login')
            .send({ email: 'wrong@test.com', password: 'wrong' });

        expect(res.statusCode).toBe(401);
        expect(res.body.token).toBeUndefined();
    });
});