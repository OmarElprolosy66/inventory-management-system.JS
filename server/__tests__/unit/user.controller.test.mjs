import request from 'supertest';
import app from '../../config/app.mjs';
import UserService from '../../app/services/user.service.mjs';
import { describe, it, test, expect, vi, afterEach } from 'vitest';

vi.mock('../../app/services/user.service.mjs');

describe('UserController', () => {
    afterEach(() => vi.clearAllMocks());

    test('login returns token for valid credentials', async () => {
        UserService.getUserByEmail.mockResolvedValue({
            _id: 'user123',
            password: await require('bcrypt').hash('pass', 10),
            role: 'admin'
        });

        const res = await request(app)
            .post('/api/v1/login')
            .send({ email: 'test@test.com', password: 'pass' });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
    });

    test('login fails for invalid credentials', async () => {
        UserService.getUserByEmail.mockResolvedValue(null);

        const res = await request(app)
            .post('/api/v1/login')
            .send({ email: 'wrong@test.com', password: 'wrong' });

        expect(res.statusCode).toBe(401);
        expect(res.body.token).toBeUndefined();
    });
});