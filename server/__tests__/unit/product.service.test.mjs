import ProductService from '../../app/services/product.service.mjs';
import Product from '../../app/models/product.model.mjs';
import { describe, it, test, expect, vi, afterEach } from 'vitest';

vi.mock('../../app/models/product.model.mjs');

describe('ProductService', () => {
    afterEach(() => vi.clearAllMocks());

    test('findAll returns paginated products', async () => {
        Product.countDocuments.mockResolvedValue(1);
        Product.find.mockReturnValue({
            sort: () => ({
                skip: () => ({
                    limit: () => Promise.resolve([{ name: 'Test Product' }])
                })
            })
        });

        const result = await ProductService.findAll(1, 10);
        expect(result.products.length).toBeGreaterThan(0);
    });

    test('create saves a product', async () => {
        Product.mockImplementation(data => ({
            save: () => Promise.resolve({ ...data, _id: 'prod123' })
        }));

        const result = await ProductService.create({ name: 'New Product' });
        expect(result._id).toBe('prod123');
    });
});