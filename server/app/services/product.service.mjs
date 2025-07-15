import Product from '../models/product.model.mjs';
import User from '../models/user.model.mjs';

class ProductService {
    async getProductById(id) {
        return await Product.findById(id);
    }

    async findAll(page = 1, limit = 10) {
        const totalProducts = await Product.countDocuments();
        const products = await Product.find()
            .sort({ createdAt: -1 })
            .skip(limit * (page - 1))
            .limit(10);

        return {
            products,
            page,
            totalPages: Math.ceil(totalProducts / limit),
            total: totalProducts,
        };
    }

    async create(data) {
        const product = new Product(data);
        return await product.save();
    }

    async update(id, data) {
        return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async delete(id) {
        return await Product.findByIdAndDelete(id);
    }
}

export default new ProductService();